<template>
  <div id="chart">
    <div id="top">
      <div id="top-left" v-bind:style="{height:h}">
        <div id="leftChart1" v-bind:style="{marginBottom:mb}">
          <left-chart1></left-chart1>
        </div>
        <div id="leftChart2" >
          <left-chart2></left-chart2>
        </div>
      </div>
      <div id="top-center" v-bind:style="{height:h}">
        <top-center></top-center>
      </div>
      <div id="top-right" v-bind:style="{height:h}">
        <div id="rightChart1" v-bind:style="{marginBottom:mb}">
          <right-chart1></right-chart1>
        </div>
        <div id="rightChart2">
          <right-chart2></right-chart2>
        </div>
      </div>
    </div>
    <div id="bottom">
      <bottom-chart></bottom-chart>
    </div>
  </div>
</template>

<script>
  import leftChart1 from './LeftChart1';
  import leftChart2 from './LeftChart2';
  import topCenter from './Center';
  import rightChart1 from './RightChart1';
  import rightChart2 from './RightChart2';
  import bottomChart from './BottomChart';
  import store from '../../../store/index'

  export default {
    name: "index",
    data() {
      return {
        clientHeight:'',
        mb:'',
        h:'',
        data:
          {
            leftChart1: [
              {
                id:'1',
                name:'运输收入',
                data:[52.99,58.29,10.01]
              },
              {
                id:'2',
                name:'旅客发送量',
                data:[3523.24,3908.02,10.92]
              },
              {
                id:'3',
                name:'货物发送量',
                data:[732.50,758.37,3.53]
              },
              {
                id:'4',
                name:'旅客周转量',
                data:[146.78,156.33,6.50]
              },
              {
                id:'5',
                name:'货物周转量',
                data:[84.63,80.45,-4.94]
              },
              {
                id:'6',
                name:'行包周转量',
                data:[0.32,0.20,-38.41]
              },
              {
                id:'7',
                name:'总换算周转量',
                data:[231.73,236.97,2.26]
              },
              {
                id:'8',
                name:'直通2货周量',
                data:[56.35,50.86,-9.74]
              },
              {
                id:'9',
                name:'静载重',
                data:[55.00,54.80,-0.36]
              },
              {
                id:'10',
                name:'装车数',
                data:[4461.00,4609.00,3.32]
              },
              {
                id:'11',
                name:'卸空车数',
                data:[6990.00,6991.00,0.01]
              },
              {
                id:'12',
                name:'货车周转时间',
                data:[2.22,2.12,-4.50]
              },
              {
                id:'13',
                name:'停时',
                data:[22.00,20.60,-6.36]
              },
              {
                id:'14',
                name:'中时',
                data:[4.80,4.80,0.00]
              },
              {
                id:'15',
                name:'旅速',
                data:[36.80,40.00,8.70]
              },
              {
                id:'16',
                name:'机车日车公里',
                data:[461.00,472.00,2.39]
              },
              {
                id:'17',
                name:'机车日产量',
                data:[115.60,113.10,-2.16]
              },
              {
                id:'18',
                name:'列车平牵',
                data:[2742.00,2690.00,-1.90]
              },
              {
                id:'19',
                name:'技术速度',
                data:[54.20,55.10,1.66]
              },
            ],
            rightChart1: [
              {
                id:'1',
                name:'运输收入',
                data:[204.08,225.51,10.50]
              },
              {
                id:'2',
                name:'旅客发送量',
                data:[13446.90,14816.31,10.18]
              },
              {
                id:'3',
                name:'货物发送量',
                data:[2712.49,2884.47,6.34]
              },
              {
                id:'4',
                name:'旅客周转量',
                data:[659.52,676.10,2.51]
              },
              {
                id:'5',
                name:'货物周转量',
                data:[318.17,312.51,-1.78]
              },
              {
                id:'6',
                name:'行包周转量',
                data:[0.98,0.76,-22.36]
              },
              {
                id:'7',
                name:'总换算周转量',
                data:[978.66,989.36,1.09]
              },
              {
                id:'8',
                name:'直通2货周量',
                data:[209.45,196.88,-6.00]
              },
              {
                id:'9',
                name:'静载重',
                data:[55.40,55.10,-0.54]
              },
              {
                id:'10',
                name:'装车数',
                data:[4079.00,4361.00,6.91]
              },
              {
                id:'11',
                name:'卸空车数',
                data:[6502.92,6957.66,6.99]
              },
              {
                id:'12',
                name:'货车周转时间',
                data:[2.30,2.21,-3.91]
              },
              {
                id:'13',
                name:'停时',
                data:[24.10,22.00,-8.71]
              },
              {
                id:'14',
                name:'中时',
                data:[5.10,5.00,-1.96]
              },
              {
                id:'15',
                name:'旅速',
                data:[37.00,38.90,5.14]
              },
              {
                id:'16',
                name:'机车日车公里',
                data:[454.00,459.00,1.10]
              },
              {
                id:'17',
                name:'机车日产量',
                data:[113.10,110.90,-1.95]
              },
              {
                id:'18',
                name:'列车平牵',
                data:[2763.00,2716.00,-1.70]
              },
              {
                id:'19',
                name:'技术速度',
                data:[54.40,54.80,0.74]
              }
            ],
            leftChart2: [
              {
                id:'1',
                name:'运输收入',
                biyue:[58.26,58.29,0.03],
                binian:[56.98,58.29,1.31]
              },
              {
                id:'2',
                name:'旅客发送量',
                biyue:[3838.20,3908.02,69.82],
                binian:[3697.81,3908.02,210.21]
              },
              {
                id:'3',
                name:'货物发送量',
                biyue:[764.40,758.37,-6.03],
                binian:[756.16,758.37,2.21]
              },
              {
                id:'4',
                name:'旅客周转量',
                biyue:[163.72,156.33,-7.39],
                binian:[162.90,156.33,-6.58]
              },
              {
                id:'5',
                name:'货物周转量',
                biyue:[73.50,80.45,6.95],
                binian:[87.95,80.45,-7.50]
              },
              {
                id:'6',
                name:'行包周转量',
                biyue:[,0.20, ],
                binian:[0.25,0.20,-0.05]
              },
              {
                id:'7',
                name:'总换算周转量',
                biyue:[237.22,236.97,-0.25],
                binian:[251.10,236.97,-14.13]
              },
              {
                id:'8',
                name:'直通2货周量',
                biyue:[,50.86,],
                binian:[55.89,50.86,-5.03]
              },
              {
                id:'9',
                name:'静载重',
                biyue:[56.00,54.80,-1.20],
                binian:[56.00,54.80,0.60]
              },
              {
                id:'10',
                name:'装车数',
                biyue:[4550.00,4609.00,59.00],
                binian:[4550.00,4609.00,-41.00]
              },
              {
                id:'11',
                name:'卸空车数',
                biyue:[7150.00,6991.00,-159.00],
                binian:[7150.00,6991.00,-109.00]
              },
              {
                id:'12',
                name:'货车周转时间',
                biyue:[2.17,2.12,-0.05],
                binian:[2.17,2.12,-0.05]
              },
              {
                id:'13',
                name:'停时',
                biyue:[22.50,20.60,-1.90],
                binian:[22.50,20.60,-1.60]
              },
              {
                id:'14',
                name:'中时',
                biyue:[5.10,4.80,-0.30],
                binian:[5.10,4.80,-0.30]
              },
              {
                id:'15',
                name:'旅速',
                biyue:[38.50,40.00,1.50],
                binian:[38.50,40.00,3.50]
              },
              {
                id:'16',
                name:'机车日车公里',
                biyue:[451.00,472.00,21.00],
                binian:[451.00,472.00,22.00]
              },
              {
                id:'17',
                name:'机车日产量',
                biyue:[116.30,113.10,-3.20],
                binian:[116.30,113.10,-2.90]
              },
              {
                id:'18',
                name:'列车平牵',
                biyue:[2850.00,2690.00,-160.00],
                binian:[2850.00,2690.00,-160.00]
              },
              {
                id:'19',
                name:'技术速度',
                biyue:[53.00,55.10,2.10],
                binian:[53.00,55.10,2.10]
              },
            ],
            rightChart2: [
              {
                id:'1',
                name:'运输收入',
                data:'32.5'
              },
              {
                id:'13',
                name:'停时',
                data:'99.1'
              },
              {
                id:'14',
                name:'中时',
                data:'98.0'
              },
              {
                id:'15',
                name:'旅速',
                data:'106.6'
              },
              {
                id:'2',
                name:'旅客发送量',
                data:'32.93'
              },
              {
                id:'3',
                name:'货物发送量',
                data:'31.4'
              },
              {
                id:'4',
                name:'旅客周转量',
                data:'34.1'
              },
              {
                id:'5',
                name:'货物周转量',
                data:'29.2'
              },
              {
                id:'6',
                name:'行包周转量',
                data:'24.5'
              },
              {
                id:'7',
                name:'总换算周转量',
                data:'32.4'
              },
              {
                id:'8',
                name:'直通2货周量',
                data:'29.0'
              },
              {
                id:'9',
                name:'静载重',
                data:'101.7'
              },
              {
                id:'10',
                name:'装车数',
                data:'93.8'
              },
              {
                id:'11',
                name:'卸空车数',
                data:'98.0'
              },


              {
                id:'16',
                name:'机车日车公里',
                data:'102.0'
              },
              {
                id:'12',
                name:'货车周转时间',
                data:'98.7'
              },
              {
                id:'17',
                name:'机车日产量',
                data:'95.6'
              },
              {
                id:'18',
                name:'列车平牵',
                data:'95.3'
              },
              {
                id:'19',
                name:'技术速度',
                data:'103.4'
              }
            ],
            bottomChart:[
            ],
          },
      };
    },
    components: {
      leftChart1,
      leftChart2,
      topCenter,
      rightChart1,
      rightChart2,
      bottomChart
    },
    mounted() {
      store.commit("allData",this.data);
      this.clientHeight = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.h = 300+300+this.clientHeight*0.01+'px';
      this.mb = this.clientHeight*0.01+'px';
      console.log("获取屏幕的宽度"+this.clientHeight);
      console.log("块高度"+this.h);
      console.log("与底部的距离",this.mb);
    },
    methods: {

    }
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
    text-align: center;
  }

  #top-left {
    width: 28%;
    display: inline-block;
    #leftChart1 {
      width: 100%;
      height: 300px;
      background: rgb(42, 42, 42);
      display: inline-block;
      border-radius: 8px;
    }
    #leftChart2 {
      width: 100%;
      height: 300px;
      background: rgb(42, 42, 42);
      display: inline-block;
      border-radius: 8px;
    }
  }

  #top-center {
    width: 40%;
    display: inline-block;
    margin-left: 1%;
    margin-right: 1%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 8px;
  }

  #top-right {
    width: 28%;
    display: inline-block;
    #rightChart1 {
      height: 300px;
      width: 100%;
      background: rgb(42, 42, 42);
      display: inline-block;
      /*margin-bottom: 30px;*/
      border-radius: 8px;
    }
    #rightChart2 {
      height: 300px;
      width: 100%;
      background: rgb(42, 42, 42);
      display: inline-block;
      border-radius: 8px;
    }
  }

  #bottom {
    width: 100%;
    height: 300px;
    text-align: center;
    vertical-align: center;
    background: rgb(42, 42, 42);
  }

</style>
