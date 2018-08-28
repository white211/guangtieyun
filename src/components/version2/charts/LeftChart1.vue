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
          // backgroundColor:'rgba(0,0,0,0.5)',
          title: {
            text: "2018年4月集团" + leftChartData.name + "同期对比",
            left: 'center',
            top: 15,
            textStyle: {
              align: 'center',
              fontSize: 16,
              color: 'black',
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
                  color: 'black'
                }
              },
              {
                value: '2018/4',
                textStyle: {
                  color: 'black'
                }
              }
            ],
            axisLine: {
              lineStyle: {
                color: 'black'
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
                color:'black'
              },
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'rgba(0,0,0,0.2)'
              }
            },
            axisLabel: {
              color: 'black'
            },
            nameTextStyle: {
              color: 'black'
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
                color:'black'
              }
            },
            splitLine:{
              show:false
            },
            interval: 3,
            axisLabel: {
              color: 'black'
            },
            splitNumber: 5,
            nameTextStyle: {
              color: 'black'
            },
            minInterval: 3
          }],
          legend: {
            orient: 'vertical',
            // backgroundColor: 'rgba(0,0,0,0.1)',
            left: 50,
            top: 50,
            data: [
              {
                name: this.leftChartData.name,
                textStyle: {
                  color: 'black',
                }
              }, {
                name: '同期对比(%)',
                textStyle: {
                  color: 'black'
                }
              }
            ],
          },
          series: [{
            name: this.leftChartData.name,
            type: 'bar',
            data: [leftChartData.data[0], leftChartData.data[1]],
            color: 'rgb(124,181,236)',
            barWidth: 66,
            label: {
              normal:{
                show: true,
                position:'top',
                color:'black'
              }
            },
          },
            {
              name: '同期对比(%)',
              type: 'line',
              data: [0, leftChartData.data[2]],
              color: 'rgb(124,181,236)',
              yAxisIndex: 1,
              label: {
                normal:{
                  show: true,
                  position:'top',
                  color:'red'
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
