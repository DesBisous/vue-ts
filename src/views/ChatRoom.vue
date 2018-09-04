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
               <div class="inr">
                 <div class="chatItem">
                   <img src="../../public/images/user.jpg" alt="">
                   <p class="name">金所炫</p>
                   <p class="chat">你喜欢我？</p>
                 </div>
                 <div class="chatItem">
                   <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533300049777&di=9dc9b14a22d87d4c3a47876a2e277a8f&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3518200860%2C46511204%26fm%3D214%26gp%3D0.jpg" alt="">
                   <p class="name">V 帅</p>
                   <p class="chat">不可能的事！</p>
                 </div>
                 <div class="chatItem">
                   <img src="../../public/images/user.jpg" alt="">
                   <p class="name">金所炫</p>
                   <p class="chat">你..你...</p>
                 </div>
                 <div class="chatItem">
                   <img src="../../public/images/liguangzhu.jpg" alt="">
                   <p class="name">李光洙</p>
                   <p class="chat">要不，喜欢我怎么样？</p>
                 </div>
                 <div class="chatItem">
                   <img src="../../public/images/user.jpg" alt="">
                   <p class="name">金所炫</p>
                   <p class="chat">额...</p>
                 </div>
                 <div class="chatItem">
                   <img src="../../public/images/user.jpg" alt="">
                   <p class="name">金所炫</p>
                   <p class="chat">你洗洗睡吧，哥</p>
                 </div>
               </div>
               <div class="inputBlock">
                 <el-input placeholder="请输入内容" v-model="inputValue">
                   <el-button type="primary" slot="append" circle>发送</el-button>
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
                 <div class="chatItem users">
                   <img src="../../public/images/user.jpg" alt="">
                   <p class="name">金所炫</p>
                 </div>
                 <div class="chatItem users">
                   <img src="../../public/images/liguangzhu.jpg" alt="">
                   <p class="name">李光洙</p>
                 </div>
                 <div class="chatItem users">
                   <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533300049777&di=9dc9b14a22d87d4c3a47876a2e277a8f&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3518200860%2C46511204%26fm%3D214%26gp%3D0.jpg" alt="">
                   <p class="name">V 帅</p>
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

@Component
export default class ChatRoom extends Vue {
  private inputValue: string = '';

  constructor() {
    super();
  }

  protected mounted() {
    console.log('欢迎来到聊天室!');
    const ws = new WebSocket('ws://localhost:3000/ws/chat');
    ws.onmessage = function(event) {
      console.log(event);
    };
    ws.send('你好！');
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
