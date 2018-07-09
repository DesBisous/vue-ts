<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {

  public render() {
    return (
      <el-aside width>
        123
      </el-aside>
    );
  }
  public mounted() {
    this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success',
    });
  }
}
</script>

<style scoped lang="less">

</style>
