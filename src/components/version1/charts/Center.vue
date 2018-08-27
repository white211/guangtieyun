<template>
  <div id="center">
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange" style="height: 50px;line-height: 50px">
      <Checkbox label="0" :style="{color:'rgba(255,211,81,0.9)'}">落后于年计划或月计划</Checkbox>
      <Checkbox label="-1" :style="{color:' rgba(226, 82, 81,0.9)'}">落后于月计划和年计划</Checkbox>
      <Checkbox label="1" :style="{color:'rgba(144,198,99,0.9)'}">进度超前</Checkbox>
      <Checkbox label="2" :style="{color:'#d3d3d3'}">无计划</Checkbox>
    </CheckboxGroup>
    <div style="width: 100%;height: 50px;line-height: 50px;text-align: left;">
      <Row>
        <Col span="5" style="color: white;font-size: 16px">
        选择年月：
        </Col>
        <Col span="8">
        <DatePicker type="month" placeholder="选择月份" style="width: 150px"></DatePicker>
        </Col>
      </Row>
    </div>
    <ul class="list" v-bind:style="{height:hgh}">
      <li>
        <div class="header">
          <span>指标</span>
          <span>完成值</span>
        </div>
      </li>
      <li class="data" v-for="item in data" @mouseenter="showData(item.id)" :class="{'red':item.alarm === -1,
      'green':item.alarm ===1,'grey':item.alarm === 2,'yellow':item.alarm===0}">
        <div class="block">
          <span class="sign">{{item.sign}}</span>
          <span class="complete">{{item.complete}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../../../store/index';
  import $ from 'jquery';
  import niceScroll from 'jquery.nicescroll';

  export default {
    name: "center",
    data() {
      return {
        checkAllGroup: ['0', '-1', '1', '2'],
        columns1: [
          {
            title: '指标',
            key: 'sign'
          },
          {
            title: '完成值',
            key: 'complete'
          },
        ],
        data1: [
          {
            sign: '运输收入',
            complete: '58.29亿元',
            alarm: 1,
            id: 1,
          },
          {
            sign: '旅客发送量',
            complete: '3908.02万人',
            alarm: 1,
            id: 2,
          },
          {
            sign: '货物运送量',
            complete: '758.37万吨',
            alarm: 0,
            id: 3,
          },
          {
            sign: '旅游周转量',
            complete: '156.22亿人公里',
            alarm: -1,
            id: 4,
          }, {
            sign: '货物周转量',
            complete: '80.45亿吨公里',
            alarm: 0,
            id: 5,
          },
          {
            sign: '行包周转量',
            complete: '0.20亿吨公里',
            alarm: 0,
            id: 6,
          },
          {
            sign: '总换算周转量',
            complete: '236.97亿吨公里',
            alarm: -1,
            id: 7,
          },
          {
            sign: '直通2货周量',
            complete: '50.86亿吨公里',
            alarm: 0,
            id: 8,
          },
          {
            sign: '静载量',
            complete: '54.8吨/车',
            alarm: 0,
            id: 9,
          },
          {
            sign: '装车数',
            complete: 24,
            alarm: 0,
            id: 10,
          },
          {
            sign: '卸空车数',
            complete: '6991车',
            alarm: -1,
            id: 11,
          },
          {
            sign: '货车周转时间',
            complete: '2.12天（车辆日）',
            alarm: -1,
            id: 12,
          },
          {
            sign: '停时',
            complete: '20.6小时',
            alarm: -1,
            id: 13,
          },
          {
            sign: '中时',
            complete: '4.8小时',
            alarm: -1,
            id: 14,
          },
          {
            sign: '旅速',
            complete: '40.0公里/小时',
            alarm: 1,
            id: 15,
          },
          {
            sign: '机车日车公里',
            complete: '472公里',
            alarm: 1,
            id: 16,
          },
          {
            sign: '机车日产量',
            complete: '113.1万吨公里',
            alarm: -1,
            id: 17
          },
          {
            sign: '列车平牵',
            complete: '2690吨',
            alarm: -1,
            id: 18,
          },
          {
            sign: '技术速度',
            complete: '55.1公里/小时',
            id: 19,
            alarm: 1,
          },
          {
            sign: '机车单机走行率',
            complete: '11.1%',
            alarm: 2,
            id: 20,
          },
          {
            sign: '机车检修率',
            complete: '6.%',
            alarm: 2,
            id: 21,
          },
          {
            sign: '超重吨数',
            complete: '5.89吨',
            alarm: 2,
            id: 22,
          },
          {
            sign: '欠重吨数',
            complete: '15.67万吨',
            alarm: 2,
            id: 23,
          },
          {
            sign: '客车出发',
            complete: '100%',
            alarm: 2,
            id: 24,
          },
          {
            sign: '客车运行',
            complete: '100%',
            alarm: 2,
            id: 25,
          },
          {
            sign: '货车出发',
            complete: '99.5%',
            alarm: 2,
            id: 26,
          },
          {
            sign: '货车运行',
            complete: '99.1%',
            alarm: 2,
            id: 27,
          },
        ],
        data2: [],
        cityList: [
          {
            value: '一月份',
            label: '一月份'
          },
          {
            value: '二月份',
            label: '二月份'
          },
          {
            value: '三月份',
            label: '三月份'
          },
          {
            value: '四月份',
            label: '四月份'
          },
          {
            value: '五月份',
            label: '五月份'
          },
          {
            value: '六月份',
            label: '六月份'
          },
          {
            value: '七月份',
            label: '七月份'
          },
          {
            value: '八月份',
            label: '八月份'
          },
          {
            value: '九月份',
            label: '九月份'
          },
          {
            value: '十月份',
            label: '十月份'
          },
          {
            value: '十一月份',
            label: '十一月份'
          },
          {
            value: '十二月份',
            label: '十二月份'
          },
        ],
        model1: '',
        clientHeight:'',
        hgh:'510px',
      };
    },
    mounted() {
      this.clientHeight = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.hgh = 300+300-50-50+this.clientHeight*0.01+'px';
      console.log("列表的高度"+this.hgh);
      $(".list").niceScroll();
      store.commit("listData", this.data1);
    },
    methods: {
      showData(id) {
        for (var i = 0; i < store.state.allData.leftChart1.length; i++) {
          if (store.state.allData.leftChart1[i].id == id) {
            let data1 = store.state.allData.leftChart1[i];
            store.commit("leftChart1", data1);
          }
        }
        for (var i = 0; i < store.state.allData.leftChart2.length; i++) {
          if (store.state.allData.leftChart2[i].id == id) {
            let data2 = store.state.allData.leftChart2[i];
            store.commit("leftChart2", data2);
          }
        }
        for (var i = 0; i < store.state.allData.rightChart1.length; i++) {
          if (store.state.allData.rightChart1[i].id == id) {
            let data3 = store.state.allData.rightChart1[i];
            store.commit("rightChart1", data3);
          }
        }
      },
      checkAllGroupChange(selected) {
        this.data2 = [];
        console.log(selected);
        if (selected.length > 0) {
          for (var i = 0; i < selected.length; i++) {
            for (var j = 0; j < this.data1.length; j++) {
              if (this.data1[j].alarm == selected[i]) {
                this.data2.push(this.data1[j]);
              }
            }
          }
        }
        store.commit("listData", this.data2);
      }
    },
    computed: {
      data() {
        return store.state.listData;
      }
    }
  };
</script>

<style scoped>
  #center {
    height: 100%;
    width: 100%;
    padding: 10px 3% 0 3%;
    display: inline-block;
  }

  ul {
    width: 100%;
    /*height: 510px;*/
    display: inline-block;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  ul li {
    list-style: none;
    font-size: 20px;
    color: #d3d3d3;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed white;
    display: inline-block;
    transition: all 0.5s
  }

  .header {
    font-weight: bold;
  }

  .header span {
    display: inline-block;
    width: 49%;
    height: 50px;
    text-align: center;
  }

  ul li span {
    display: inline-block;
    width: 49%;
    height: 50px;
    text-align: center;
  }

  .data:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    color: white;
  }

  .red {
    color: rgba(226, 82, 81, 0.7);
  }

  .yellow {
    color: rgba(255, 211, 81, 0.5);
  }

  .grey {
    color: #d3d3d3;
  }

  .green {
    color: rgba(144, 198, 99, 0.9);
  }

  .red:hover {
    /*background-color: rgba(226, 82, 81, 0.7);*/
    /*color: white;*/
  }

  .yellow:hover {
    /*background-color: rgba(255, 211, 81, 0.5);*/
    /*color: white;*/
  }

  .green:hover {
    /*background-color: rgba(144, 198, 99, 0.9);*/
    /*color: white;*/
  }

  .grey:hover {
    /*background-color: rgb(51, 51, 53);*/
    /*color: white;*/
  }

  /*.list::-webkit-scrollbar {*/
  /*width:0px;*/
  /*height:0px;*/
  /*}*/
  /*.list::-webkit-scrollbar-button    {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-webkit-scrollbar-track     {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-webkit-scrollbar-track-piece {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.scroll_content::-webkit-scrollbar-thumb{*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-webkit-scrollbar-corner {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-webkit-scrollbar-resizer  {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-webkit-scrollbar {*/
  /*!*width:10px;*!*/
  /*!*height:10px;*!*/
  /*}*/
  /*!*o内核*!*/
  /*.list .-o-scrollbar{*/
  /*-moz-appearance: none !important;*/
  /*background: rgba(0,255,0,0) !important;*/
  /*}*/
  /*.list::-o-scrollbar-button    {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-o-scrollbar-track     {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-o-scrollbar-track-piece {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-o-scrollbar-thumb{*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-o-scrollbar-corner {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*.list::-o-scrollbar-resizer  {*/
  /*background-color:rgba(0,0,0,0);*/
  /*}*/
  /*IE10,IE11,IE12*/
  /*.list{*/
  /*-ms-scroll-chaining: chained;*/
  /*-ms-overflow-style: none;*/
  /*-ms-content-zooming: zoom;*/
  /*-ms-scroll-rails: none;*/
  /*-ms-content-zoom-limit-min: 100%;*/
  /*-ms-content-zoom-limit-max: 500%;*/
  /*-ms-scroll-snap-type: proximity;*/
  /*-ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);*/
  /*-ms-overflow-style: none;*/
  /*overflow: auto;*/
  /*}*/

</style>
