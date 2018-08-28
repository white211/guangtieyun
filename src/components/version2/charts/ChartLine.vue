<template>
  <div id="line" :style="{width:'300px',height:'300px'}">
  </div>
</template>

<script>
  export default {
    name: "chart-line",
    data() {
      return {};
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine(){
       let line = this.$echarts.init(document.getElementById("line"));
       line.setOption({
         title:{
           text:"2018年6月集团运输收入完成情况"
         },
         tooltip:{

         },
         xAxis:{
           data: ["广州火车站","广州东站", "广州南站", "广州北站"]
         },
         yAxis:{

         },
         legend:{
           data:['']
         },
         series:[{
            name:"客流量/万",
            type:'line',
            data:[10,20,30,40]
         },
           {

           }

         ]
       });
      }
    }
  };
</script>

<style scoped>

</style>
