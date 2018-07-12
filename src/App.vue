<template>
  <div id="app">
    <el-container>
      <SideBar></SideBar>
      <el-container direction='vertical' class='container'>
        <TopBar/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/common/SideBar.vue';
import TopBar from '@/components/common/TopBar.vue';

@Component({
  components: {
    SideBar,
    TopBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import './assets/less/common.less';
@import './assets/less/style.less';

html {
  width: 100%;
  min-height: 100%;
}
body {
  width: 100%;
  min-height: 100vh!important;
  margin: 0!important;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; // 字体抗锯齿渲染
  -moz-osx-font-smoothing: grayscale; // 字体抗锯齿渲染
  letter-spacing: .45px;
}
.el-main {
  // background-color: @background-gray;
}
.container {
  background-color: @background-gray;
}
</style>
