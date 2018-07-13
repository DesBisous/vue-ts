<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class SideBar extends Vue {
  @Getter('sideBar/collapse') private collapse: any;

  public render() {
    const router: any = this.$router;
    const routes = router.options.routes;
    const dom = this.recursion(routes, '0');
    return (
      <aside>
        <el-menu
          collapse={this.collapse}
          active-text-color='#fff'
          background-color='#001529'
          text-color='hsla(0,0%,100%,.65)'
          default-active={this.$route.meta.light || this.$route.path}
          class='el-menu-vertical-demo'
          router>
          <div class='menu-header'>
            <i class='iconfont icon-androidboat'></i>
            <p>Vue TypeScript</p>
          </div>
          {dom}
        </el-menu>
      </aside>
    );
  }
  public recursion(routes: any, index: string) {
    const mianMenus = routes.map((route: any, subIndex: string) => {
      const icon = `iconfont icon-${route.meta.icon} icon-style`;
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
@import "../../assets/less/style";

aside {
  min-height: 100vh;
  background: @background-deep-blue;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  &>ul {
    padding: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
}
.el-menu-vertical-demo.el-menu--collapse {
  .menu-header {
    p {
      width: 0;
      overflow: hidden;
    }
  }
}
.el-submenu /deep/ .el-submenu__title {
  &:hover {
   color: @tender-green!important;
  }
}
.el-submenu {
  &.is-active /deep/ .el-submenu__title {
    color: @tender-green!important;
  }
  .el-menu-item {
    background-color: @background-black-blue!important;
    height: 40px;
    line-height: 40px;
  }
}
.el-menu-item {
  height: 40px;
  line-height: 40px;
  &:hover {
    color: @tender-green!important;
  }
  &.is-active {
    background-color: @background-blue!important;
    color: #fff!important;
  }
}
.menu-header {
  display: flex;
  // justify-content: center;
  align-content: center;
  color: #fff;
  height: 60px;
  padding-left: 16px;
  line-height: 60px;
  font-size: @font-size-main-title;
  background-color: @background-dark-blue;
  font-weight: 600;
  i {
    font-size: @font-size-slarge-title;
    margin: -1px 10px 0 0;
  }
  p {
    margin: 0;
    transition: all .3s;
  }
}
.icon-style {
  margin-right: 10px;
}
</style>
