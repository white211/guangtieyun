<template>
  <div id="chart">
      <!--<bar></bar>-->
      <themap></themap>
  </div>
</template>

<script>
  import bar from '../charts/ChartBar'
  import pie from '../charts/ChartPie'
  import Chartline from '../charts/ChartLine'
  import themap from '../charts/ChartMap'
  export default {
    name: "index",
    data() {
      return {

      };
    },
    components:{
        bar,
        pie,
        Chartline,
      themap
    },
    mounted() {

    },
    methods: {

    }
  };
</script>

<style scoped lang="less">
#chart{
  display: inline-block;
}
</style>
