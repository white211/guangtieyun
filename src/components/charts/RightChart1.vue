<template>

</template>

<script>
  export default {
    name: "right-chart1",
    data() {
      return {};
    },
    mounted() {
      this.draw();
    },
    methods: {
      draw(){
        let rightChart1 = this.$echarts.init(document.getElementById("rightChart1"));
        let option = {
          title: {
            text: "2018年1-4月集团运输收入同期对比",
            left: 'center',
            textStyle:{
              align:'center',
              fontSize:16,
              color:"#d3d3d3",
              rich:{
                a:{

                }
              }
            }
          },
          tooltip: {

          },
          xAxis: [{
            type: 'category',
            data: [
              {
                value:'2017/1-2017/4',
                textStyle:{
                  color:'#d3d3d3'
                }
              },
              {
                value:'2018/1-2017/4',
                textStyle:{
                  color:'#d3d3d3'
                }
              }
            ],
            axisLine:{
              lineStyle:{
                color:'#d3d3d3'
              }
            }
          }],
          yAxis: [{
            type: 'value',
            scale: true,
            name: '运输收入',
            max: 80,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show: false
            },
            axisLabel:{
              color:'rgb(42,144,143)'
            },
            nameTextStyle:{
              color:'rgb(42,144,143)'
            }
          }, {
            type: 'value',
            scale: true,
            name: '同期对比(%)',
            max: 12,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show: false
            },
            axisLabel:{
              color:'rgb(144,198,99)'
            },
            splitNumber: 5,
            nameTextStyle:{
              color:'rgb(144,198,99)'
            },
            minInterval:3
          }],
          legend: {
            orient: 'vertical',
            backgroundColor:'black',
            left: 50,
            top: 50,
            data: [
              {
                name:'运输收入',
                textStyle:{
                  color:'#d3d3d3',
                }
              }, {
                name:'同期对比(%)',
                textStyle:{
                  color:'#d3d3d3'
                }
              }
            ],
          },
          series: [{
            name: '运输收入',
            type: 'bar',
            data: [45, 60],
            color: 'rgb(42,144,143)',
            barWidth: 66,
          },
            {
              name: '同期对比(%)',
              type: 'line',
              data: [0, 5],
              color: 'rgb(144,198,99)',
              yAxisIndex:1
            }
          ]
        }
        rightChart1.setOption(option);
      }
    }
  };
</script>

<style scoped>

</style>
