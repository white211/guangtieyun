<template>
  <div id="rightChart2" :style="{width:'100%',height:'400px'}">
  </div>
</template>

<script>
  export default {
    name: "right-chart2",
    data() {
      return {

      };
    },
    mounted(){
      this.draw();
    },
    methods:{
      draw(){
        let rightChart2 = this.$echarts.init(document.getElementById("rightChart2"));
        let option = {
          title:{
            text:'集团运输主要指标年累计完成情况',
            left:'center',
            textStyle:{
              color:'#d3d3d3',
              fontSize:16,
              align:'center',
              rich:{
                a:{

                }
              }
            }
          },
          radiusAxis: {
              splitNumber:2,
              min:0,
              max:100,
              axisLine:{
                lineStyle:{
                  color:"#d3d3d3"
                }
              },
              z:10
          },
          polar: {

          },
          angleAxis:{
            splitNumber:10,
            startAngle:45,
            type:'category',
            data:[
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },{
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },
              {
                value:'运输收入',
                textStyle:{
                  color:'#d3d3d3'
                },
              },


              // '运输收入',
              // '旅客发送量',
              // '货物运送量',
              // '旅游周转量',
              // '货物周转量',
              // '行包周转量',
              // '总换算周转量',
              // '直通2货周量',
              // '静载量',
              // '装车数',
              // '卸空车数',
              // '火车周转时间',
              // '停时',
              // '中时',
              // '旅速',
              // '机车日车公里',
              // '机车日产量',
              // '列车平牵',
              // '技术速度',
              // '机车单机走行率',
              // '机车检修率',
              // '超重吨数',
              // '欠重吨数',
              // '客车出发',
              // '客车运行',
              // '货车出发',
              // '货车运行'
            ],
            z:5,
            splitLine:{
              show:true,
              lineStyle:{
                color:"#d3d3d3",
                type:"dashed"
              }
            }
          },
          series:[
            {
             type:'bar',
              data: [50, 60, 40, 41, 51, 52, 53, 54,
                59, 55, 60, 61, 62, 55, 66, 77,
                80, 22, 23, 24, 25, 26, 45, 56, 78, 88
              ],
              coordinateSystem: 'polar',
              name: 'A',
              // stack: 'a',
              color:'rgb(42,144,143)'
            }
          ],
          legend: {
            show: false,
            data: ['A']
          }
        }
        rightChart2.setOption(option);
      }
    }
  };
</script>

<style scoped>

</style>
