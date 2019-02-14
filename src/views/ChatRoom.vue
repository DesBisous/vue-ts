<template lang="html">
  <div class="chatRoom">
  <div class="content">
    <div class="skillStack">
      <p>技术栈：Vue、TypeScript、Npm、NodeJs、Koa2、Less、WebSocket</p>
    </div>
    <div class="chatRoomMain">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="frame">
            <div class="head">
              <i class="iconfont icon-androiddrafts"></i>
              聊天室
            </div>
            <div class="body">
             <div class="inr" ref="scroll">
                <template v-for="item in chats">
                  <template v-if="item.type !== 'chat'">
                    <div class="chatInfo" :key="item.id">
                      {{item.data}}
                    </div>
                  </template>
                  <template v-else>
                    <div class="chatItem" :key="item.id">
                      <img :src="item.user.url" alt="">
                      <p class="name">{{item.user.name}}</p>
                      <p class="chat">{{item.data.meg}}</p>
                    </div>
                  </template>
                </template>
              </div>
              <div class="inputBlock">
                <el-input placeholder="请输入内容" v-model="inputValue" @keyup.enter.native="megSend">
                  <el-button type="primary" slot="append" circle @click="megSend">发送</el-button>
                </el-input>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="frame">
            <div class="head">
              <i class="iconfont icon-androidcontacts"></i>
              在线人员
            </div>
            <div class="body userBody">
              <div class="inr">
                <div class="chatItem users" v-for="(item, index) in users" :key="index">
                  <img :src="item.url" alt="">
                  <p class="name">{{item.name}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setCookie, getCookie, deleteCookie } from '../lib/cookie';
import User from '../interface/user';
import Chat from '../interface/chat';

@Component
export default class ChatRoom extends Vue {
  private inputValue: string = '';
  private ws: any = null;
  private users: User[] = [];
  private chats: Chat[] = [];

  constructor() {
    super();
  }

  protected onMessage(event: any) {
    const chatInfo = JSON.parse(event.data);
    const type = chatInfo.type;
    if (type === 'users') {
      this.users = chatInfo.data.meg;
      // console.log(this.users);
    } else {
      const chat: Chat = {
        id: chatInfo.id, // 信息 id
        type: chatInfo.type, // 信息 type
        user: chatInfo.user, // 信息来自 user
      };
      switch (chatInfo.type) {
        case 'enter': chat.data = chatInfo.data.meg; break;
        case 'leave': chat.data = chatInfo.data.meg; break;
        case 'chat': chat.data = chatInfo.data; break;
        default: break;
      }
      this.chats.push(chat);
      this.$nextTick(() => {
        const scroll = this.$refs.scroll as HTMLDivElement;
        scroll.scrollTop = scroll.scrollHeight;
      });
      // console.log(this.chats);
    }
  }

  protected onError(code: number, msg: string) {
    this.$message.error('[ERROR] ' + code + ': ' + msg);
    console.error('[ERROR] ' + code + ': ' + msg);
    this.ws.close();
  }

  protected onClose(evt: {code: number, type: string}) {
    console.warn('[CLOSED] ' + evt.code + ': ' + evt.type);
  }

  protected send(meg: {type: string, meg: string}) {
    this.ws.send(JSON.stringify(meg));
  }

  protected megSend() {
    const meg = {
      type: 'text',
      meg: this.inputValue,
    };
    this.inputValue = '';
    this.send(meg);
  }

  protected mounted() {
    if (Object.keys(this.$route.query).length <= 0) {
      this.$message.error('请您先登录，谢谢~');
      return;
    } else {
      const user = {
        id: this.$route.query.id,
        name: this.$route.query.name,
        url: '../../public/images/default.jpg',
      };
      switch (user.name) {
        case '金所炫': user.url = require('../../public/images/user.jpg'); break;
        case '李光洙': user.url = require('../../public/images/liguangzhu.jpg'); break;
        case '刘在石': user.url = require('../../public/images/liuzaishi.jpg'); break;
      }
      setCookie('user', JSON.stringify(user));
      this.ws = new WebSocket('ws://localhost:3000/ws/chat');
      this.ws.onmessage = this.onMessage;
      this.ws.onerror = this.onError;
      this.ws.onclose = this.onClose;
      this.ws.onopen = () => this.send({type: 'text', meg: 'Hello 大家好~'});
    }
  }

  protected destroyed() {
    if (this.ws) {
      this.ws.close();
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/style.less';

.chatRoom {
  font-family: @Comic-Sans-MS;
}
.skillStack {
  color: #fff;
  background: @purple;
  margin: -16px -16px 0;
  padding: 16px;
  p {
    margin: 8px 16px;
    font-size: @font-size-min-title;
  }
}
.chatRoomMain {
  img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 8px;
    left: 0;
    border-radius: 50%;
  }
  .name {
    margin: 0 0 4px 0;
    font-size: @font-size-min-title;
  }
  .chat {
    margin: 0;
    font-size: @font-size-base-text;
    color: @font-color-base;
    padding-right: 30%;
  }
  margin-top: 24px;
  .frame {
    border: 1px solid @font-color-last;
    .head {
      padding: 12px 10px;
      background: @purple;
      color: #fff;
      margin: 0 -1px;
    }
    .body {
      padding: 16px 16px 64px;
      position: relative;
      height: 450px;
      &.userBody {
        padding: 16px;
        height: 498px;
      }
      .inr {
        overflow-y: auto;
        height: 100%;
      }
      .chatItem {
        position: relative;
        padding: 8px 8px 8px 53px;
        margin-bottom: 8px;
        &.users {
          img {
            width: 30px;
            height: 30px;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
          }
          p {
            margin: 0;
            font-size: @font-size-base-text;
          }
        }
      }
      .chatInfo {
        font-size: @font-size-min-text;
        color: #888;
        text-align: center;
        margin-bottom: 8px;
      }
      .inputBlock {
        position: absolute;
        bottom: 8px;
        left: 0px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 16px;
      }
    }
  }
}
</style>
