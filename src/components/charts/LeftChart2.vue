<template>
  <div id="leftChart2">

  </div>
</template>

<script>
  export default {
    name: "left-chart2",
    data() {
      return {};
    },
    mounted(){
      this.draw();
    },
    methods:{
      draw(){
        let leftChart2 = this.$echarts.init(document.getElementById("leftChart2"));
        let option = {
          title: {
            text: '2018年4月集团公司货物发送量与月计划比',
            left:'center',
            textStyle:{
              color:'#d3d3d3',
              fontSize:16,
              align:'center',
              rich:{
                a:{

                }
              }
            },
          },
          legend: {
            data: ['实际完成', '差额','计划'],
            align:'right',
            right:10,
            show:false
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine:{
              lineStyle:{
                color:'#d3d3d3'
              }
            }
          },
          yAxis: {
            type: 'category',
            data: ['比月计划','比年计划'],
            axisLine:{
              lineStyle:{
                color:'#d3d3d3'
              }
            },
            axisLabel:{
              rotate:-90
            }
          },
          series: [
            {
              name: '实际完成',
              stack:'总量',
              type: 'bar',
              data: [758.37,758.37],
              color:'rgb(255,211,81)',
              barWidth:40,
            },
            {
              name: '差额',
              stack:'总量',
              type: 'bar',
              data: [6,50],
              barWidth:40,
            },
            {
              name: '计划',
              // stack:'总量',
              type: 'bar',
              data: [764.40,756.16],
              color:'rgb(102,102,102)',
              barWidth:40,
            }
          ]
        };
        leftChart2.setOption(option);
      }
    }
  };
</script>

<style scoped>

</style>
