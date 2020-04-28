
<template>
  <div>
    <h2>
      <a
        href="https://www.echartsjs.com/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts"
        target="_blank"
      >官方文档</a>
    </h2>
    <div style="display:flex;">
      <pre style="width:50%">
// 基于准备好的dom，初始化echarts实例 (main 必须设置宽高;类似就是canvas)
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
  title: {
      text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
      data:['销量']
  },
  xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
    </pre>
      <div style="width:50%">
        <div id="main" style="width:100%;height:400px;"></div>
      </div>
    </div>

    <div>
      <h2><a href="https://www.echartsjs.com/zh/tutorial.html#ECharts%20%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5%E6%A6%82%E8%A7%88">基础概念</a></h2>
      <ul>
        <li>实例 dom  ========> 对应一个div</li>
        <li>系列（series） =======> 一组数值以及他们映射成的图 =======> series.type）就是图表类型。系列类型（series.type）至少有：line（折线图）、bar（柱状图）、pie（饼图） / series.data 数据 [1,2,3]   或者dataset{source[]}获取 encode解析</li>
        <li>grid 组件（也就是直角坐标系的底板）设置 left、right、height、bottom 达到的效果。</li>
        <li>坐标系 xAxis yAxis</li>
        <li></li>
      </ul>
    </div>

    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <button class="btn" @click="render">render</button>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      myChart: null,
      option: {
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
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("main"));

    // // 指定图表的配置项和数据

    // // 使用刚指定的配置项和数据显示图表。
    // this.myChart.setOption(this.option);

    // // 基于准备好的dom，初始化echarts图表
    // var myChart = ec.init(document.getElementById("main"));

    var option = {
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
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };
    // 为echarts对象加载数据
    this.myChart.setOption(option);
  },
  methods: {}
};
</script>

<style scoped>
</style>
