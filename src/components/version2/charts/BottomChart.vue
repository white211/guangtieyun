<template>
  <div id="bottomChart" :style="{width:'100%',height:'300px'}">

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
        let dataCount = 2000;
        let data = generateData(dataCount);
        let bottomChart = this.$echarts.init(document.getElementById("bottomChart"));
        var option = {
          title: {
            // text:this.$echarts.format.addCommas(dataCount)+' 条数据',
            text:'集团公司运输收入月度完成情况',
            // text: echart.format.addCommas(dataCount) + ' Data',
            left: 'center',
            top:15,
            textStyle:{
              color:"black"
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
          dataZoom: [
            {
            type: 'inside',
          },
            {
            type: 'slider',
            textStyle:{
              color: 'black'
            }
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
                color:'black'
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
                color:'rgba(0,0,0,0.2)',
                type:'dashed'
              }
            },

            axisLine:{
              lineStyle:{
                color:'black'
              }
            }

          },
          series: [{
            type: 'bar',
            data: data.valueData,
            large: true,
            color:'rgb(124,181,236)'
          }]
        };
        function generateData(count) {
          var baseValue = Math.random() * 1000;
          var time = +new Date(2018, 7, 10);
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
            categoryData.push(getNowFormatDate(time));
            // categoryData.push(echart.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
            // categoryData.push(time);
            valueData.push(next(i).toFixed(2));
            time += 1000;
          }
          return {
            categoryData: categoryData,
            valueData: valueData
          };
        }
        function getNowFormatDate(time) {
          var time = new Date(time);
          var seperator1 = "-";
          var seperator2 = ":";
          var month = time.getMonth() + 1;
          var strDate = time.getDate();
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          var currentdate = time.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + time.getHours() + seperator2 + time.getMinutes()
            + seperator2 + time.getSeconds();
          return currentdate;
        }
        bottomChart.setOption(option);
      }
    }
  };
</script>

<style scoped>

</style>
