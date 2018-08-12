<template lang="html">
  <div class="chatRoom">
   <div class="content">
     <div class="skillStack">
       <h1>
         欢迎进入聊天室！
         <p>Welcome to WebSocket.</p>
       </h1>
       <p>技术栈：Vue、TypeScript、Npm、NodeJs、Koa2、Less、WebSocket</p>
     </div>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ChatRoom extends Vue {
}
</script>

<style lang="less">
@import '../assets/less/style.less';

.skillStack {
  color: #fff;
  background: @purple;
  font-family: @Comic-Sans-MS;
  margin: -16px -16px 0;
  padding: 32px;
  h1 {
    font-size: @font-size-slarge-title;
    margin: 0 0 40px 0;
    p {
      margin: 8px 16px;
      font-size: @font-size-min-title;
    }
  }
}
</style>
