<template>
  <div id="chart">
    <div id="top">
      <div id="top-left">
        <div id="leftChart1">
          <left-chart1></left-chart1>
        </div>
        <div id="leftChart2">
          <left-chart2></left-chart2>
        </div>
      </div>
      <div id="top-center">
        <top-center></top-center>
      </div>
      <div id="top-right">
        <div id="rightChart1">
          <right-chart1></right-chart1>
        </div>
        <div id="rightChart2">
          <right-chart2></right-chart2>
        </div>
      </div>
    </div>
    <div id="bottom">

    </div>
  </div>
</template>

<script>
  import leftChart1 from '../charts/LeftChart1';
  import leftChart2 from '../charts/LeftChart2';
  import topCenter from '../charts/Center';
  import rightChart1 from '../charts/RightChart1';
  import rightChart2 from '../charts/RightChart2';

  export default {
    name: "index",
    data() {
      return {};
    },
    components: {
      leftChart1,
      leftChart2,
      topCenter,
      rightChart1,
      rightChart2
    },
    mounted() {

    },
    methods: {}
  };
</script>

<style scoped lang="less">
  #chart {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: rgb(51, 51, 53);
    background: rgb(51, 51, 53);
  }

  #top {
    width: 100%;
    padding: 1%;
  }

  #top-left {
    width: 28%;
    height: 850px;
    display: inline-block;
    #leftChart1 {
      width: 100%;
      height: 400px;
      /*border: 1px solid white;*/
      background: rgb(42, 42, 42);
      display: inline-block;
    }
    #leftChart2 {
      width: 100%;
      height: 400px;
      /*border: 1px solid white;*/
      margin-top: 50px;
      background: rgb(42, 42, 42);
      display: inline-block;
    }
  }

  #top-center {
    width: 40%;
    height: 850px;
    /*border: 1px solid white;*/
    display: inline-block;
    margin-left: 1%;
    margin-right: 1%;
    background: rgb(42, 42, 42);
  }

  #top-right {
    width: 28%;
    height: 850px;
    display: inline-block;
    #rightChart1 {
      /*border: 1px solid white;*/
      height: 400px;
      width: 100%;
      background: rgb(42, 42, 42);
      display: inline-block;
    }
    #rightChart2 {
      /*border: 1px solid white;*/
      height: 400px;
      width: 100%;
      margin-top: 50px;
      background: rgb(42, 42, 42);
      display: inline-block;
    }
  }

  #bottom {
    width: 100%;
    height: 400px;
    border: 1px solid white;
  }

</style>
