<template>

</template>

<script>
  import  store from '../../../store/index'
  export default {
    name: "right-chart1",
    data() {
      return {};
    },
    mounted() {
      let data1 = store.state.allData.rightChart1[0];
      store.commit("rightChart1",data1);
      this.draw(this.rightChart1);
    },
    methods: {
      draw(rightChart1){
        let rightChart = this.$echarts.init(document.getElementById("rightChart1"));
        let option = {
          title: {
            text: "2018年1-4月集团"+rightChart1.name+"同期对比",
            left: 'center',
            top:15,
            textStyle:{
              align:'center',
              fontSize:16,
              color:"black",
              rich:{
                a:{

                }
              }
            }
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: [{
            type: 'category',
            label:{
              show:true
            },
            data: [
              {
                value:'2017/1-2017/4',
                textStyle:{
                  color:'black'
                }
              },
              {
                value:'2018/1-2018/4',
                textStyle:{
                  color:'black'
                }
              }
            ],
            axisLine:{
              lineStyle:{
                color:'black'
              }
            }
          }],
          yAxis: [{
            type: 'value',
            scale: true,
            name: rightChart1.name,
            max: rightChart1.data[0]>rightChart1.data[1]?Math.ceil(rightChart1.data[0]*1.5):
              Math.ceil(rightChart1.data[1]*1.5),
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine: {
              show: false
            },
            axisLabel:{
              color:'black'
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'rgba(0,0,0,0.2)'
              }
            },
            nameTextStyle:{
              color:'black'
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
              show: false
            },
            splitLine:{
              show:false
            },
            axisLabel:{
              color:'black'
            },
            splitNumber: 5,
            nameTextStyle:{
              color:'black'
            },
            minInterval:3
          }],
          legend: {
            orient: 'vertical',
            // backgroundColor:'black',
            left: 50,
            top: 50,
            data: [
              {
                name:rightChart1.name,
                textStyle:{
                  color:'black',
                }
              }, {
                name:'同期对比(%)',
                textStyle:{
                  color:'black'
                }
              }
            ],
          },
          series: [{
            name: rightChart1.name,
            type: 'bar',
            data: [rightChart1.data[0], rightChart1.data[1]],
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
              data: [0, rightChart1.data[2]],
              color: 'rgb(124,181,236)',
              yAxisIndex:1,
              label: {
                normal:{
                  show: true,
                  position:'top',
                  color:'red'
                }
              },
            }
          ]
        }
        rightChart.setOption(option);
      }
    },
    computed:{
      rightChart1:{
        get(){
          return store.state.rightChart1;
        },
        set(){
          return store.commit("rightChart1",value);
        }
      }
    },
    watch:{
      rightChart1(){
        this.draw(this.rightChart1);
      }
    }
  };
</script>

<style scoped>

</style>
