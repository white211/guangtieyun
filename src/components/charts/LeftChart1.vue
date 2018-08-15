<template>
   <div id="leftChart1" :style="{width:'100%',height:'400px'}">
   </div>
</template>

<script>
  export default {
    name: "left-chart1",
    data() {
      return {};
    },
    mounted(){
      this.draw();
    },
    methods:{
      draw(){
        let leftCharts1 = this.$echarts.init(document.getElementById("leftChart1"));
        let option = {
          title: {
            text: "2018年4月集团运输收入同期对比",
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
                value:'2017/4',
                textStyle:{
                  color:'#d3d3d3'
                }
              },
              {
                value:'2018/4',
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
            max: 75,
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
            max: 12.5,
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
            }
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
                name:'同期对比',
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
            barWidth: 66
          },
            {
              name: '同期对比',
              type: 'line',
              data: [0, 5],
              color: 'rgb(144,198,99)',
            }
          ]
        }
        leftCharts1.setOption(option);
      }
    }

  };
</script>

<style scoped>

</style>
