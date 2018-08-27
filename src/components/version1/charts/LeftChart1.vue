<template>
  <div id="leftChart1" :style="{width:'100%',height:'400px'}">
  </div>
</template>

<script>
  import store from '../../../store/index';

  export default {
    name: "left-chart1",
    data() {
      return {
        data: store.state.leftChart1,
      };
    },
    mounted() {
      let data1 = store.state.allData.leftChart1[0];
      store.commit("leftChart1", data1);
      this.data = this.leftChartData;
      this.draw(this.leftChartData);
    },
    methods: {
      draw(leftChartData) {
        let leftCharts1 = this.$echarts.init(document.getElementById("leftChart1"));
        let option = {
          title: {
            text: "2018年4月集团" + leftChartData.name + "同期对比",
            left: 'center',
            top: 15,
            textStyle: {
              align: 'center',
              fontSize: 16,
              color: "#d3d3d3",
              rich: {
                a: {}
              }
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: [{
            type: 'category',
            data: [
              {
                value: '2017/4',
                textStyle: {
                  color: '#d3d3d3'
                }
              },
              {
                value: '2018/4',
                textStyle: {
                  color: '#d3d3d3'
                }
              }
            ],
            axisLine: {
              lineStyle: {
                color: '#d3d3d3'
              }
            }
          }],
          yAxis: [{
            type: 'value',
            scale: true,
            name: leftChartData.name,
            max: leftChartData.data[0]>leftChartData.data[1]?Math.ceil(leftChartData.data[0]*1.5):
              Math.ceil(leftChartData.data[1]*1.5),
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show:false,
              lineStyle:{
                color:'#d3d3d3'
              },
            },
            splitLine:{
              show:true
            },
            axisLabel: {
              color: 'rgb(42,144,143)'
            },
            nameTextStyle: {
              color: 'rgb(42,144,143)'
            }
          }, {
            type: 'value',
            scale: true,
            show: true,
            name: '同期对比(%)',
            // max: 12,
            // min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show: false,
              lineStyle:{
                color:'#d3d3d3'
              }
            },
            splitLine:{
              show:false
            },
            interval: 3,
            axisLabel: {
              color: 'rgb(144,198,99)'
            },
            splitNumber: 5,
            nameTextStyle: {
              color: 'rgb(144,198,99)'
            },
            minInterval: 3
          }],
          legend: {
            orient: 'vertical',
            backgroundColor: 'black',
            left: 50,
            top: 50,
            data: [
              {
                name: this.leftChartData.name,
                textStyle: {
                  color: '#d3d3d3',
                }
              }, {
                name: '同期对比(%)',
                textStyle: {
                  color: '#d3d3d3'
                }
              }
            ],
          },
          series: [{
            name: this.leftChartData.name,
            type: 'bar',
            data: [leftChartData.data[0], leftChartData.data[1]],
            color: 'rgb(42,144,143)',
            barWidth: 66,
            label: {
              normal:{
                show: true,
                position:'top',
                color:'white'
              }
            },
          },
            {
              name: '同期对比(%)',
              type: 'line',
              data: [0, leftChartData.data[2]],
              color: 'rgb(144,198,99)',
              yAxisIndex: 1,
              label: {
                normal:{
                  show: true,
                  position:'top',
                  color:'white'
                }
              },
            }
          ]
        };
        leftCharts1.setOption(option);
      }
    },
    watch: {
      leftChartData() {
        this.draw(this.leftChartData);
      }
    },
    computed: {
      leftChartData: {
        get() {
          return store.state.leftChart1;
        },
        set(value) {
          return store.commit("leftChart1", value);
        }
      }
    }
  };
</script>

<style scoped>

</style>
