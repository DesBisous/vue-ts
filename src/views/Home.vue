<template>
  <div class="home">
    <div class="body">
      <div class="top">
        <div class="top-img">
          <img src="../assets/logo.png">
        </div>
        <div class="top-item">
          <ul>
            <li v-for="(item, index) in topList" :key="index">
              <i class="iconfont" :class="item.icon"></i>
              <div class="details">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  private topList: any[] = [];

  constructor() {
    super();
    this.topList = [
      {
        title: '游戏',
        desc: '游戏俱乐部...',
        icon: 'icon-iosgamecontrollerb',
      },
      {
        title: '学习',
        desc: '学习俱乐部...',
        icon: 'icon-university',
      },
      {
        title: '美妆',
        desc: '美妆俱乐部...',
        icon: 'icon-bowtie',
      },
      {
        title: '运动',
        desc: '运动俱乐部...',
        icon: 'icon-iosamericanfootball',
      },
    ];
    console.log(this.topList);
  }

}
</script>
<style scoped lang="less">
@import '../assets/less/style.less';

.top {
  display: flex;
  align-items: center;
  height: 135px;
  .top-img {
    box-sizing: border-box;
    padding: 8px;
    width: 8%;
    flex-grow: 0; // 不放大
    img {
      width: 100%;
    }
  }
  .top-item{
    flex-grow: 1; // 放大
    height: 100%;
    ul{
     display: flex;
     align-items: center;
     height: 100%;
     box-sizing: border-box;
     padding: 16px 0;
     li {
       flex: auto; // 等于1 1 auto
       display: flex;
       align-items: center;
       margin: 0 16px;
       height: 100%;
       border-radius: 6px;
       box-shadow: @shadow-last;
       &:hover {
         box-shadow: @shadow-min;
       }
       i {
         display: inline-block;
         width: 40%;
         flex-grow: 0; // 不放大
         color: #fff;
         font-size: 60px;
         text-align: center;
       }
       .details {
         flex: auto; // 等于1 1 auto
         background-color: transparent;
         height: 100%;
         color: #fff;
         padding: 8px 16px;
         box-sizing: border-box;
         h2 {
           margin: 12px 0 0 0;
         }
         p {
           font-size: @font-size-base-text;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
       }
       &:nth-child(1) {
         background-color: @purple;
       }
       &:nth-child(3) {
         background-color: @dark-green;
       }
       &:nth-child(4) {
         background-color: @blue;
       }
       &:nth-child(2) {
         background-color: @danger;
       }
     }
   }
  }
}
</style>
