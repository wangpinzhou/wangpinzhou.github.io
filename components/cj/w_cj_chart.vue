
<template>
  <div>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <button class="btn" @click="render">render</button>
    <div id="main" style="width:1100px;height:400px;"></div>
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
        text: "组织结构图"
      },
      tooltip: {
        show: false,
        trigger: "item",
        formatter: "{b}: {c}"
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: false,
      series: [
        {
          name: "树图",
          type: "tree",
          orient: "vertical", // vertical horizontal
          rootLocation: { x: "50%", y: "15%" }, // 根节点位置  {x: 'center',y: 10}
          nodePadding: 20,
          layerPadding: 40,
          symbol: "rectangle",
          borderColor: "black",
          itemStyle: {
            normal: {
              color: "#fff", //节点背景色
              label: {
                show: true,
                position: "inside",
                textStyle: {
                  color: "black",
                  fontSize: 15
                  //fontWeight:  'bolder'
                }
              },
              lineStyle: {
                color: "#000",
                width: 1,
                type: "broken" // 'curve'|'broken'|'solid'|'dotted'|'dashed'
              }
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
          data: [
            {
              name: "董事会",
              value: 6,
              symbolSize: [70, 30],
              symbol: "rectangle",
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: "black"
                }
              },
              children: [
                {
                  name: "总经理",
                  value: 6,
                  symbolSize: [70, 30],
                  symbol: "rectangle",
                  itemStyle: {
                    normal: {
                      borderWidth: 2,
                      borderColor: "black"
                    }
                  },
                  children: [
                    {
                      name: "营销中心",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      },
                      children: [
                        {
                          name: "市场部",
                          value: 4,
                          symbolSize: [60, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "销售部",
                          value: 4,
                          symbolSize: [60, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "客服部",
                          value: 4,
                          symbolSize: [60, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        }
                      ]
                    },
                    {
                      name: "项目中心",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      },
                      children: [
                        {
                          name: "售前支持部",
                          value: 4,
                          symbolSize: [90, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "项目一部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "项目二部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "项目三部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        }
                      ]
                    },
                    {
                      name: "技术中心",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      },
                      children: [
                        {
                          name: "开发部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "设计部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        },
                        {
                          name: "系统部",
                          value: 4,
                          symbolSize: [70, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        }
                      ]
                    },
                    {
                      name: "行政部",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      }
                    },
                    {
                      name: "财务部",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      }
                    },
                    {
                      name: "其他分支",
                      value: 4,
                      symbolSize: [70, 30],
                      symbol: "rectangle",
                      itemStyle: {
                        normal: {
                          label: {
                            show: true,
                            position: "inside"
                          },
                          borderWidth: 2,
                          borderColor: "black"
                        }
                      },
                      children: [
                        {
                          name: "汕头分公司",
                          value: 4,
                          symbolSize: [90, 30],
                          symbol: "rectangle",
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: "inside"
                              },
                              borderWidth: 2,
                              borderColor: "black"
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
    // 为echarts对象加载数据
    this.myChart.setOption(option);
  },
  methods: {
    render() {
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
</style>
