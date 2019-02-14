<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @State('user') private stateUser: any;
  @State((state: any) => state.user) private stateUser1: any;
  @Getter('user') private getterUser: any;
  @Action('setUser') private actionUser: any;
  @Mutation('setUser') private mutationUser: any;

  public created(): void {
    setTimeout(() => {
      console.log(this.stateUser);
      this.actionUser({ id: 123 });
      console.log(this.stateUser);
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
