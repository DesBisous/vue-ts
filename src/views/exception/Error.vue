<template lang="html">
  <div class="error">
    <div class="content">
      <img src="../../../public/images/error.gif" alt="">
      <div class="desc">
        <h1>{{info}}</h1>
        <p>页面好吃！我先睡一会再说 ~ </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class Error extends Vue {
  private info?: string = '404';

  @Watch('$route')
  protected routeWatch(to: Route, from: Route) {
    this.info = to.name;
  }
}
</script>

<style scoped lang="less">
@import '../../assets/less/style.less';

.error {
  position: relative;
  img {
    display: block;
    width: 60%;
    margin: auto;
  }
  .desc {
    position: absolute;
    bottom: 50px;
    background: #fff;
    width: 100%;
    height: 200px;
    z-index: 1;
    font-size: @font-size-slarge-title;
    font-weight: bold;
    color: @font-color-base;
    text-align: center;
  }
}
</style>
