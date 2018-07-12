<template lang="html">
  <el-header>
    <i class='icon-switch el-icon-d-arrow-left' @click='modifyCollapse'></i>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class TopBar extends Vue {
  @Action('sideBar/modifyCollapse') private modifyCollapse: any;
}
</script>

<style scoped lang="less">
@import '../../assets/less/style.less';

.el-header {
  line-height: 60px;
  padding: 0 20px 0 0;
}
.icon-switch {
  font-size: @font-size-large-title;
  padding: 0 20px;
}
</style>
