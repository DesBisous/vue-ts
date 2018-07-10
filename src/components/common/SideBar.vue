<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
  public render() {
    const router: any = this.$router;
    const routes = router.options.routes;
    const dom = this.recursion(routes, '0');
    return (
      <el-aside width='240px'>
        <el-menu
          active-text-color='#fff'
          background-color='#001529'
          text-color='hsla(0,0%,100%,.65)'
          default-active={this.$route.meta.light || this.$route.path}
          class='el-menu-vertical-demo'
          router>
          {dom}
        </el-menu>
      </el-aside>
    );
  }
  public recursion(routes: any, index: string) {
    const mianMenus = routes.map((route: any, subIndex: string) => {
      const icon = `iconfont icon-${route.meta.icon}`;
      let dom;
      if (!route.children || route.meta.showChildren === false) {
        dom = (
          <el-menu-item index={route.path}>
            {
              route.meta.icon ? <i class={icon}></i> : ''
            }
            <span slot='title'>{route.meta.title}</span>
          </el-menu-item>
        );
      } else {
        const level = `${index}-${subIndex}`;
        const submenus = this.recursion(route.children, level);
        dom = (
          <el-submenu index={level}>
            <template slot='title'>
              {
                route.meta.icon ? <i class={icon}></i> : ''
              }
              <span slot='title'>{route.meta.title}</span>
            </template>
            {submenus}
          </el-submenu>
        );
      }
      return dom;
    });
    return mianMenus;
  }
}
</script>

<style scoped lang="less">
@TenderGreen: #42b983;

.el-aside {
  min-height: 100vh;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  &>ul {
    padding: 16px 0px;
    width: 100%;
    border: none;
  }
}
.el-submenu__title {
  &:hover {
    color: @TenderGreen!important;
  }
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
  &:hover {
    color: @TenderGreen!important;
  }
  &.is-active {
    background-color: #1890ff!important;
  }
}
</style>
