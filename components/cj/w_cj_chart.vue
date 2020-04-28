
<template>
  <div>
    <h2>
      <a
        href="https://www.echartsjs.com/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts"
        target="_blank"
      >官方文档</a>
    </h2>
    <div style="display:flex;">
      <textarea class="form-control" style="height:50vh;width:50%;" v-model="options"></textarea>
      <!-- <pre style="width:50%">
// 基于准备好的dom，初始化echarts实例 (main 必须设置宽高;类似就是canvas)
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var option = {{option}}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
      </pre>-->
      <div style="width:50%">
        <button class="btn btn-sm btn-success" @click="render">运行</button>

        <div id="main" style="width:100%;height:400px;"></div>
      </div>
    </div>

    <div>
      <h2>
        <a
          href="https://www.echartsjs.com/zh/tutorial.html#ECharts%20%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%E6%A6%82%E8%A7%88"
        >基础概念</a>
      </h2>
      <ul>
        <li>实例 dom ========> 对应一个div</li>
        <li>系列（series） =======> 一组数值以及他们映射成的图 =======> series.type）就是图表类型。系列类型（series.type）至少有：line（折线图）、bar（柱状图）、pie（饼图） / series.data 数据 [1,2,3] 或者dataset{source[]}获取 encode解析</li>
        <li>grid 组件（也就是直角坐标系的底板）设置 left、right、height、bottom 达到的效果。</li>
        <li>坐标系 xAxis yAxis</li>
        <li></li>
      </ul>
    </div>

    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      myChart: null,
      option1: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      option: {
        title: {
          text: "堆叠区域图"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    };
  },
  mounted() {
    this.render();
  },
  computed: {
    options: {
      // getter
      get: function() {
        return JSON.stringify(this.option, null, "   ");
      },
      // setter
      set: function(newValue) {
        this.option = eval( `(${newValue})`) //JSON.parse(newValue);//转义  JSON.parse(newValue);
      }
    }
  },
  methods: {
    render() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById("main"));

      // // 指定图表的配置项和数据

      // // 使用刚指定的配置项和数据显示图表。
      // this.myChart.setOption(this.option);

      // // 基于准备好的dom，初始化echarts图表
      // var myChart = ec.init(document.getElementById("main"));

      var option = this.option;
      // console.log(JSON.stringify(option, null, "    "));
      // 为echarts对象加载数据
      this.myChart.setOption(option,true);  // true fix 重绘失败的问题;
    }
  }
};
</script>

<style scoped>
</style>
