<template>
  <div id="bottomChart" :style="{width:'100%',height:'400px'}">

  </div>
</template>

<script>
  export default {
    name: "bottom-chart",
    data() {
      return {};
    },
    mounted() {
      this.draw();
    },
    methods: {
      draw() {
        let dataCount = 5e5;
        let data = generateData(dataCount);
        let bottomChart = this.$echarts.init(document.getElementById("bottomChart"));
        // let echart = this.$echarts;
        var option = {
          title: {
            text:'25454',
            // text: echart.format.addCommas(dataCount) + ' Data',
            left: 10,
            textStyle:{
              color:"#d3d3d3"
            }
          },
          toolbox: {
            // feature: {
            //   dataZoom: {
            //     yAxisIndex: false
            //   },
            //   saveAsImage: {
            //     pixelRatio: 2
            //   }
            // }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            bottom: 90
          },
          dataZoom: [{
            type: 'inside'
          }, {
            type: 'slider'
          }],
          xAxis: {
            data: data.categoryData,
            silent: false,
            splitLine: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color:'white'
              }
            }
          },
          yAxis: {
            splitArea: {
              show: false
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'white',
                type:'dashed'
              }
            },

            axisLine:{
              lineStyle:{
                color:'white'
              }
            }

          },
          series: [{
            type: 'bar',
            data: data.valueData,
            // Set `large` for large data amount
            large: true,
            color:'rgb(42,144,143)'
          }]
        };
        function generateData(count) {
          var baseValue = Math.random() * 1000;
          var time = +new Date(2011, 0, 1);
          var smallBaseValue;


          function next(idx) {
            smallBaseValue = idx % 30 === 0
              ? Math.random() * 700
              : (smallBaseValue + Math.random() * 500 - 250);
            baseValue += Math.random() * 20 - 10;
            return Math.max(
              0,
              Math.round(baseValue + smallBaseValue) + 3000
            );
          }

          var categoryData = [];
          var valueData = [];

          for (var i = 0; i < count; i++) {
            // categoryData.push(echart.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
            categoryData.push(time);
            valueData.push(next(i).toFixed(2));
            time += 1000;
          }

          return {
            categoryData: categoryData,
            valueData: valueData
          };
        }
        bottomChart.setOption(option);
      }


    }
  };
</script>

<style scoped>

</style>
