<template>
  <div class="home">
    <div class="content top">
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
    <div class="content info">
      <div class="info-nav">
        <h3>统计数据</h3>
        <div class="nav-right">
          <span>今日</span>
          <span>本周</span>
          <span>本月</span>
          <span>全年</span>
          <el-date-picker
            class="date-picker"
            v-model="timeValue"
            size="mini"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy / MM / dd"
            value-format="yyyy/MM/dd"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
      <div class="info-body">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="14" :lg="16" :xl="16">
            <div id="bar" ref="bar"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="10" :lg="8" :xl="8">
            <div class="user-list">
              <h5>活跃排名</h5>
              <ul>
                <li>
                  <img src="../../public/images/user.jpg" alt="">
                  <span>金所炫</span>
                  <em>420.00</em>
                </li>
                <li>
                  <img src="../../public/images/user.jpg" alt="">
                  <span>金所炫</span>
                  <em>320.00</em>
                </li>
                <li>
                  <img src="../../public/images/user.jpg" alt="">
                  <span>金所炫</span>
                  <em>220.00</em>
                </li>
                <li>
                  <img src="../../public/images/user.jpg" alt="">
                  <span>金所炫</span>
                  <em>120.00</em>
                </li>
                <li>
                  <img src="../../public/images/user.jpg" alt="">
                  <span>金所炫</span>
                  <em>20.00</em>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="content info">
          <div class="info-nav">
            <h3>系统 State</h3>
          </div>
          <div class="info-body">
            <details open="open">
              <summary>系统 CPU 使用率.</summary>
              <p>Here is a change in the parameter of the system.</p>
              <p>Progress requires little accumulation and cannot be rushed.</p>
              <p>The data is not necessarily accurate. Please confirm it by the administrator.</p>
              <P>System price: 190,850.00</P>
            </details>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="10" color="#8175C7"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" color="#27c2c1"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70" color="#409EFF"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" color="#F56C6C"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="#E6A23C"></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="content info">
          <div class="info-nav">
            <h3>用户分类</h3>
          </div>
          <div class="info-body">
            <div id="pie" ref="pie"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import echarts from 'echarts';

@Component
export default class Home extends Vue {
  private topList: any[] = [];
  private pickerOptions: any = {};
  private timeValue: any[] = [];
  private barChart: any = null;
  private pieChart: any = null;
  private timeoutId: any = null;

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
    this.pickerOptions = {
      shortcuts: [{
        text: '最近一周',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        },
      }, {
        text: '最近一个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        },
      }, {
        text: '最近三个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        },
      }],
    };
  }

  protected initChartsBar() {
    this.barChart = echarts.init(this.$refs.bar as HTMLDivElement);
    this.barChart.setOption({
        title: {
          subtext: '用户活跃度',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['活跃度'],
          top: '8',
        },
        toolbox: {
          show: true,
          feature: {
            magicType: {show: true, type: ['line', 'bar']},
          },
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: '活跃度',
            type: 'bar',
            itemStyle: {
              color: '#F56C6C',
              barBorderRadius: [4, 4, 0, 0],
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10,
            },
            barCategoryGap: '25%',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'},
              ],
            },
            markLine: {
              data: [
                  {type: 'average', name: '平均值'},
              ],
            },
          },
        ],
    });
  }

  protected initChartsPie() {
    this.pieChart = echarts.init(this.$refs.pie as HTMLDivElement);
    this.pieChart.setOption({
        title: {
          subtext: '纯属虚构',
        },
        tooltip : {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['IT', '服装设计', '建筑师', '教育者', '医生'],
        },
        series: [{
          name: '职业',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            {value: 355, name: 'IT', itemStyle: { color: '#F56C6C' }},
            {value: 300, name: '服装设计', itemStyle: { color: '#409EFF' }},
            {value: 254, name: '建筑师', itemStyle: { color: '#FF99CC' }},
            {value: 135, name: '教育者', itemStyle: { color: '#8175C7' }},
            {value: 400, name: '医生', itemStyle: { color: '#27c2c1' }},
          ].sort( (a, b) => a.value - b.value ),
          roseType: 'radius',
          labelLine: {
            normal: {
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
          },
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            },
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: () => Math.random() * 200,
       }],
    });
  }

  protected Repaint() {
    this.barChart.resize();
    this.pieChart.resize();
  }

  protected mounted() {
    console.log(this);
    this.initChartsBar();
    this.initChartsPie();
    window.addEventListener('resize', () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(this.Repaint, 500);
    }, false);
  }
}
</script>
<style scoped lang="less">
@import '../assets/less/style.less';

.top {
  display: flex;
  align-items: center;
  .top-img {
    box-sizing: border-box;
    padding: 8px;
    width: 8%;
    min-width: 84px;
    flex-grow: 0; // 不放大
    @media (max-width: 1062px) {
      display: none;
    }
    img {
      width: 100%;
    }
  }
  .top-item{
    flex: auto; // 放大
    height: 100%;
    width: 92%;
    ul{
     display: flex;
     align-items: center;
     height: 100%;
     box-sizing: border-box;
     padding: 16px 0 0;
     flex-wrap: wrap;
     li {
       flex: auto; // 等于1 1 auto
       display: flex;
       align-items: center;
       margin: 0 16px 16px;
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
.info {
  .info-nav {
    border-bottom: 1px solid @dark-green;
    h3 {
      float: left;
      margin: 0;
      padding: 0 0 16px 0;
      color: @font-color-main;
    }
    .nav-right {
      float: right;
      .date-picker {
        margin-left: 8px;
        margin-bottom: 16px;
      }
      span {
        cursor: pointer;
        padding: 0 12px 16px;
        font-size: @font-size-base-text;
        color: @font-color-base;
        &:hover {
          color: @background-blue;
        }
      }
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .info-body {
    #bar, #pie {
      width: 100%;
      height:400px;
    }
    .user-list {
      h5 {
        margin: 0;
        text-align: center;
        padding: 12px;
        color: @font-color-main;
      }
      li {
        display: flex;
        align-items: center;
        letter-spacing: .45px;
        padding: 15px 16px;
      }
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
      }
      span {
        flex: auto;
        color: @font-color-main;
        font-size: @font-size-base-text;
        padding: 0 16px;
      }
      em {
        color: @font-color-base;
        font-size: @font-size-base-text;
      }
    }
  }
  details {
    padding: 16px 0;
  }
  .el-progress {
    padding: 8px 0;
  }
  .el-progress /deep/ .el-progress-bar__outer {
    background-color: transparent;
  }
}
</style>
