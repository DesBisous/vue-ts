<template lang="html">
  <div class="userList">
    <div class="content">
      <div class="vip">
        <p class="diadema">👑 vip</p>
        <el-row :gutter="32">
          <el-col :span="6" v-for="(user, index) in userVip" :key="index">
            <el-card>
              <span class="triangle"></span>
              <span class="num">{{index + 1}}</span>
              <img :src="user.url" alt="">
              <div class="desc">
                <p>{{user.name}}</p>
                <span>{{user.profession}} | {{user.age}}</span>
                <span>{{user.email}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="list">
        <div class="search">
          <el-input placeholder="请输入..." v-model="searchValue" class="input-with-select">
            <el-select v-model="searchKey" slot="prepend" placeholder="请选择">
              <el-option label="姓名" value="name"></el-option>
              <el-option label="职位" value="profession"></el-option>
              <el-option label="状态" value="state"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="table">
          <el-table
            :data="users"
            size="medium"
            style="width: 100%"
            max-height="580">
            <el-table-column
              label="头像"
              width="150"
              align="center">
              <template slot-scope="scope">
                <img class="table-img" :src="scope.row.url" alt="">
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="80"
              align="center">
            </el-table-column>
            <el-table-column
              prop="profession"
              label="职业"
              width="120"
              align="center">
            </el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              align="left">
            </el-table-column>
            <el-table-column
              label="操作"
              width="120"
              align="center">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="15"
              layout="total, prev, pager, next"
              :total="200">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import User from '../../interface/user';

@Component
export default class UserList extends Vue {
  private userVip: User[];
  private searchValue: string = '';
  private searchKey: string = 'name';
  private users: User[];
  private currentPage: number = 1;

  constructor() {
    super();
    this.userVip = [
      {
        id: 1,
        name: '金所炫',
        age: 19,
        email: '金所炫_KimSoHyun@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '李光洙',
        age: 34,
        email: 'Lee Kwang Soo@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '朴宝英',
        age: 29,
        email: 'Park BoYoung@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '林娜琏',
        age: 23,
        email: '金所炫_Lim Na Yeon@weibo.com',
        profession: '歌手',
        url: require('../../../public/images/user.jpg'),
      },
    ];
    this.users = [
      {
        id: 1,
        name: '金所炫',
        age: 19,
        email: '金所炫_KimSoHyun@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '李光洙',
        age: 34,
        email: 'Lee Kwang Soo@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '朴宝英',
        age: 29,
        email: 'Park BoYoung@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '林娜琏',
        age: 23,
        email: '金所炫_Lim Na Yeon@weibo.com',
        profession: '歌手',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '金所炫',
        age: 19,
        email: '金所炫_KimSoHyun@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '李光洙',
        age: 34,
        email: 'Lee Kwang Soo@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '朴宝英',
        age: 29,
        email: 'Park BoYoung@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '林娜琏',
        age: 23,
        email: '金所炫_Lim Na Yeon@weibo.com',
        profession: '歌手',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '金所炫',
        age: 19,
        email: '金所炫_KimSoHyun@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '李光洙',
        age: 34,
        email: 'Lee Kwang Soo@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '朴宝英',
        age: 29,
        email: 'Park BoYoung@weibo.com',
        profession: '演员',
        url: require('../../../public/images/user.jpg'),
      },
      {
        id: 1,
        name: '林娜琏',
        age: 23,
        email: '金所炫_Lim Na Yeon@weibo.com',
        profession: '歌手',
        url: require('../../../public/images/user.jpg'),
      },
    ];
  }

  protected deleteRow(index: number) {
     this.users.splice(index, 1);
  }

  protected handleCurrentChange(val: number) {
    this.currentPage = val;
  }
}
</script>

<style scoped lang="less">
@import '../../assets/less/style.less';
.vip {
  .el-card  {
    position: relative;
    .triangle {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border-top: 50px solid @purple;
      border-right: 50px solid transparent;
    }
    .num {
      position: absolute;
      left: 2px;
      top: 5px;
      display: block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: #fff;
      z-index: 100;
      word-break: normal;
      word-wrap: normal;
      font: italic @font-size-base-title Impact;
    }
    &:hover {
     box-shadow: @shadow-min;
    }
  }
  .diadema {
    margin: 0 0 16px 0;
    font-size: @font-size-slarge-title;
    font-family: @Comic-Sans-MS;
    text-align: center;
  }
  .el-card /deep/ .el-card__body {
    padding: 0;
  }
  img {
    display: block;
  }
  .desc {
    padding: 8px 16px;
    box-sizing: border-box;
    height: 88px;
    p {
      margin: 0 0 8px 0;
      font-size: @font-size-min-title;
    }
    span {
      color: @font-color-base;
      font-size: @font-size-min-text;
      display: block;
      margin-bottom: 3px;
    }
  }
}
.list {
  padding: 24px 0;
  .search {
    padding: 8px;
    background: @purple;
    color: #fff;
    .el-select {
      width: 80px;
    }
    .input-with-select /deep/ .el-input-group__prepend, /deep/ .el-input-group__append, /deep/ .el-input__inner {
      background-color: transparent;
      color: #fff;
      border: none;
    }
    .el-button {
      font-size: @font-size-base-title;
    }
  }
}
.table-img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  box-shadow: @shadow-last;
  display: block;
  margin: auto;
}
.pagination {
  padding: 16px;
  text-align: right;
}
</style>
