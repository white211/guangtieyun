<template>
  <div id="rightChart2" :style="{width:'100%',height:'400px'}">
  </div>
</template>

<script>
  import  store from '../../store'
  export default {
    name: "right-chart2",

    data() {
      return {

      };
    },

    mounted(){
      let data4 = store.state.allData.rightChart2;
      store.commit("rightChart2",data4);
      this.draw(this.rightChart2);
    },

    methods:{
      draw(data){
        let rightChart2 = this.$echarts.init(document.getElementById("rightChart2"));
        let option = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
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
              splitNumber:4,
              min:0,
              max:100,
              axisLine:{
                lineStyle:{
                  color:"#d3d3d3"
                }
              },
              z:6
          },
          polar: {

          },
          angleAxis:{
            startAngle: 45,
            type:'category',
            data:getData(data).nameData,
              // [
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
              // {
              //   value:'运输收入',
              //   textStyle:{
              //     color:'#d3d3d3'
              //   },
              // },
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
            // ]
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
              data: getData(data).valueData,
              coordinateSystem: 'polar',
              name: '数值',
              // stack: 'a',
              color:'rgb(42,144,143)',
              label:{
               show:true
              }
            }
          ],
          legend: {
            show: false,
            data: ['数值']
          }
        }
        function getData(data1) {
          var nameData = [];
          var valueData= [];
           for(var i = 0;i<data1.length;i++){
             nameData.push({
               value:data1[i].name,
               textStyle:{
                 color:'#d3d3d3',
               },
             },);
              valueData.push(data1[i].data);
           }
           return {
             nameData:nameData,
             valueData:valueData
           }
        }
        rightChart2.setOption(option);
      }
    },

    computed:{
      rightChart2:{
        get(){
          return store.state.rightChart2;
        },
        set(){
          return store.commit("rightChart2",value);
        }
      }
    },

    watch:{
      rightChart2(){
        this.draw(this.rightChart2);
      }

    }
  };
</script>

<style scoped>

</style>
