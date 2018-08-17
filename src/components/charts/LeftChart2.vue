<template>
  <div id="leftChart2">

  </div>
</template>

<script>
  import store from '../../store'

  export default {
    name: "left-chart2",
    data() {
      return {};
    },
    mounted(){
      let data2 = store.state.allData.leftChart2[0];
      store.commit("leftChart2",data2);
      this.draw(this.leftChartData2);
    },
    methods:{
      draw(leftChartData2){
        let leftChart2 = this.$echarts.init(document.getElementById("leftChart2"));
        let option = {
          title: {
            text: '2018年4月集团公司'+leftChartData2.name+'与月计划比',
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
            min:0,
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
              data: [leftChartData2.biyue[1],leftChartData2.binian[1]],
              color:'rgb(255,211,81)',
              barWidth:40,
            },
            {
              name: '差额',
              stack:'总量',
              type: 'bar',
              data: [leftChartData2.biyue[2],leftChartData2.binian[2]],
              barWidth:40,
            },
            {
              name: '计划',
              // stack:'总量',
              type: 'bar',
              data: [leftChartData2.biyue[0],leftChartData2.binian[0]],
              color:'rgb(102,102,102)',
              barWidth:40,
            }
          ]
        };
        leftChart2.setOption(option);
      }
    },
    watch:{
      leftChartData2(){
        this.draw(this.leftChartData2);
      }
    },
    computed:{
      leftChartData2:{
        get(){
          return store.state.leftChart2;
        },
        set(value){
           store.commit("leftChart2",value);
        }
      }
    }
  };
</script>

<style scoped>

</style>
