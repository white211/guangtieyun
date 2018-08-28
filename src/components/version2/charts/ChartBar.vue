<template>
  <div id="myChart" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        data:
          {
            leftChart1: [
              {
                id:'',
                name:'',
                data:[12,23,0.35]
              },
              {
                id:'',
                name:'',
                data:[12,23,0.35]
              }
            ],
            rightChart1: [
              {
                id:'',
                name:'',
                data:[12,23,0.35]
              },
              {
                id:'',
                name:'',
                data:[12,23,0.35]
              },
            ],
            leftChart2: [
              {
                id:'',
                name:'',
                biyue:[12,23,0.35],//计划，完成，对比
                binian:[12,23,0.3]
              },
              {
                id:'',
                name:'',
                biyue:[12,23,0.35],
                binian:[12,23,0.3]
              },
            ],
            chart4: [
              {
                id:'',
                data:''
              },
              {
                id:'',
                data:''
              }
            ],
            bottomChart:[

            ]
          },
      };
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '2018年4月集团货物运输量完成情况',
            // left:'center',
            textStyle: {
              align: 'center',
              fontSize: 16,
              rich: {
                a: {}
              }
            }
          },
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 50,
            top: 50,
            data: ['货物发送量', '月计划', '年计划', '同期对比'],
          },
          xAxis: [
            {
              type: 'category',
              data: ["2017/4", "2018/4"]
            },
          ],
          yAxis: [{
            type: 'value',
            scale: true,
            name: '货物发送量(万人)',
            max: 1000,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show: false
            }
          },
            {
              type: 'value',
              scale: false,
              name: '同期对比(%)',
              max: 4,
              min: 0,
              splitNumber: 5,
              axisLine: {
                show: false
              }
            }
          ],
          series: [{
            name: '货物发送量',
            type: 'bar',
            data: [500, 550],
            barWidth: 66,
            color: 'rgb(124,181,236)'
          },
            {
              name: '月计划',
              type: 'line',
              data: [580, 580]
            },
            {
              name: '年计划',
              type: 'line',
              data: [610, 610]
            },
            {
              name: '同期对比',
              type: 'line',
              yAxisIndex: 1,
              data: (function () {
                let a = (550 - 500) / 500;
                return [0, 3.2];
              })()
            }
          ]
        });
      }
    }
  };
</script>

<style scoped>

</style>
