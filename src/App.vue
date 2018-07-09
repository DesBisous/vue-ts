<template>
  <div id="app">
    <el-container>
      <SideBar></SideBar>
      <el-container>
        <el-header>Header</el-header>
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

@Component({
  components: {
    SideBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import './assets/less/common.less';
</style>
