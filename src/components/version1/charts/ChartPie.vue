<template>
  <div id="pie" :style="{width:'300px',height:'300px'}"></div>
</template>

<script>
  export default {
    name: "chart-pie",
    data() {
      return {};
    },
    mounted() {
      this.drawPie();
    },
    methods: {
      drawPie() {
        let chartPie = this.$echarts.init(document.getElementById('pie'));
        chartPie.setOption({
          title: {
            text: "Echart饼图实例"
          },
          tooltip: {},
          series: [{
            name: '客流量/万',
            type: 'pie',
            roseType: true,
            data: [
              {name: '广州火车站', value: 10},
              {name: '广州南站', value: 20},
              {name: '广州东站', value: 30},
              {name: '广州北站', value: 40},
            ],
            cursor: 'pointer',
          }]
        });
      }
    }
  };
</script>

<style scoped>

</style>
