<template lang="html">
  <el-header>
    <i class="icon-switch iconfont" :class="collapse ? 'icon-ribbona' : 'icon-ribbonb'" @click="modifyCollapse"></i>
    <div class="right-block">
      <div class="chat">
        <el-tooltip effect="dark" content="聊天" placement="bottom">
          <i class="iconfont icon-androidchat"></i>
        </el-tooltip>
      </div>
      <div class="message">
          <i class="iconfont icon-androidnotifications">
            <span>12</span>
          </i>
      </div>
      <div class="user">
        <el-dropdown>
          <div class="el-dropdown-link">
            <img src="../../../public/images/user.jpg" alt="">
            <strong>金所炫</strong>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="iconfont icon-androidcontact"></i>
              个人中心
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="iconfont icon-androidchat"></i>
              聊天室
            </el-dropdown-item>
            <el-dropdown-item>
              邮件
            </el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class TopBar extends Vue {
  @Action('sideBar/modifyCollapse') private modifyCollapse: any;
  @Getter('sideBar/collapse') private collapse: any;
}
</script>

<style scoped lang="less">
@import '../../assets/less/style.less';

.el-header {
  line-height: 60px;
  padding: 0 20px 0 0;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-switch {
  font-size: @font-size-slarge-title;
  color: @danger;
  padding: 0 20px;
}
.top-item() {
  float: left;
  padding: 0 16px;
  color: @font-color-base;
  cursor: pointer;
  &:hover {
    color: @purple;
  }
}
.right-block {
  height: 100%;
  .user {
    padding: 0 0 0 16px;
    height: 100%;
    float: left;
    .el-dropdown-link {
      align-items: center;
      display: flex;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
    }
    strong {
      font-size: @font-size-base-text;
      margin: 0 8px 0 16px;
      color: @font-color-base;
    }
  }
  .message {
    float: left;
    padding: 0 24px;
    .top-item;
    i {
      font-size: @font-size-main-title;
      position: relative;
      span {
        position: absolute;
        top: -9px;
        left: 5px;
        display: inline-block;
        color: #fff;
        font-size: @font-size-last-text;
        font-weight: 600;
        border-radius: 25px;
        padding: 0 5px;
        height: 18px;
        line-height: 18px;
        transform: scale(0.9, 0.9);
        background-color: @danger;
      }
    }
  }
  .chat {
    .top-item;
    i {
      font-size: @font-size-main-title;
    }
  }
}
</style>
