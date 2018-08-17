<template>
  <div id="center">
    <!--<div style="padding-bottom:6px;margin-bottom:6px;">-->
      <!--<Checkbox-->
        <!--:indeterminate="indeterminate"-->
        <!--:value="checkAll"-->
        <!--@click.prevent.native="handleCheckAll">全选</Checkbox>-->
    <!--</div>-->
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <Checkbox label="落后于年计划或月计划" :style="{color:'rgba(255,211,81,0.7)'}"></Checkbox>
      <Checkbox label="落后于月计划和年计划" :style="{color:' rgb(226, 82, 81)'}"></Checkbox>
      <Checkbox label="进度超前" :style="{color:'rgb(144,198,99)'}"></Checkbox>
      <Checkbox label="无计划" :style="{color:'grey'}"></Checkbox>
    </CheckboxGroup>
    <ul>
      <li >
        <div class="header">
          <span>指标</span>
          <span>完成值</span>
        </div>
      </li>
      <li class="data" v-for="item in data" @click="showData()" :class="{'red':item.alarm === -1,
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
  export default {
    name: "center",
    data() {
      return {
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['0', '-1','1','2'],
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
            alarm: 1
          },
          {
            sign: '旅客发送量',
            complete: '3908.02万人',
            alarm: 1,
          },
          {
            sign: '货物运送量',
            complete: '758.37万吨',
            alarm: 0,
          },
          {
            sign: '旅游周转量',
            complete: '156.22亿人公里',
            alarm: -1,
          }, {
            sign: '货物周转量',
            complete: '80.45亿吨公里',
            alarm: 0,
          },
          {
            sign: '行包周转量',
            complete: '0.20亿吨公里',
            alarm: 0,
          },
          {
            sign: '总换算周转量',
            complete: '236.97亿吨公里',
            alarm: -1,
          },
          {
            sign: '直通2货周量',
            complete: '50.86亿吨公里',
            alarm: 0,
          },
          {
            sign: '静载量',
            complete: '54.8吨/车',
            alarm: 0,
          },
          {
            sign: '装车数',
            complete: 24,
            alarm: 0,
          },
          {
            sign: '卸空车数',
            complete: '6991车',
            alarm: -1,
          },
          {
            sign: '火车周转时间',
            complete: '2.12天（车辆日）',
            alarm: -1,
          },
          {
            sign: '停时',
            complete: '20.6小时',
            alarm: -1,
          },
          {
            sign: '中时',
            complete: '4.8小时',
            alarm: -1,
          },
          {
            sign: '旅速',
            complete: '40.0公里/小时',
            alarm: 1,
          },
          {
            sign: '机车日车公里',
            complete: '472公里',
            alarm: 1,
          },
          {
            sign: '机车日产量',
            complete: '113.1万吨公里',
            alarm: -1,
          },
          {
            sign: '列车平牵',
            complete: '2690吨',
            alarm: -1,
          },
          {
            sign: '技术速度',
            complete: '55.1公里/小时',
            alarm: 1,
          },
          {
            sign: '机车单机走行率',
            complete: '11.1%',
            alarm: 2,
          },
          {
            sign: '机车检修率',
            complete: '6.%',
            alarm: 2,
          },
          {
            sign: '超重吨数',
            complete: '5.89吨',
            alarm: 2,
          },
          {
            sign: '欠重吨数',
            complete: '15.67万吨',
            alarm: 2,
          },
          {
            sign: '客车出发',
            complete: '100%',
            alarm: 2,
          },
          {
            sign: '客车运行',
            complete: '100%',
            alarm: 2,
          },
          {
            sign: '货车出发',
            complete: '99.5%',
            alarm: 2,
          },
          {
            sign: '货车运行',
            complete: '99.1%',
            alarm: 2,
          },
        ],
        data:[]
      };
    },
    mounted() {
      this.data = this.data1;
    },
    methods: {
      showData() {
        alert(12345);
      },
      // handleCheckAll () {
      //   if (this.indeterminate) {
      //     this.checkAll = false;
      //   } else {
      //     this.checkAll = !this.checkAll;
      //   }
      //   this.indeterminate = false;
      //
      //   if (this.checkAll) {
      //     this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
      //   } else {
      //     this.checkAllGroup = [];
      //   }
      // },
      checkAllGroupChange (data) {
        if(data.length>0){
          for(var i = 0;i<data.length;i++){
            for(var j = 0;j<this.data1.length;j++){
                if(this.data1[j].alarm == data[i]){
                  // this.data.push(this.data1[j]);
                }
            }
          }
        }
        // if (data.length === 3) {
        //   this.indeterminate = false;
        //   this.checkAll = true;
        // } else if (data.length > 0) {
        //   this.indeterminate = true;
        //   this.checkAll = false;
        // } else {
        //   this.indeterminate = false;
        //   this.checkAll = false;
        // }
      }
    },
    computed:{

    }

  };
</script>

<style scoped>
  #center {
    height: 100%;
    width: 100%;
    padding: 10px 3% 0 3%;
    display: inline-block;
    flex-direction: column;
  }

  ul {
    width: 100%;
    height: 800px;
    display: inline-block;
    overflow-y: scroll;
    overflow-x: hidden;
    flex: 1;
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

  ul li .header {
    font-weight: bold;
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
    background:rgb(255,255,255);
    color: black;
    font-weight: bold;
  }

  .red {
    background-color: rgb(226, 82, 81);
  }

  .yellow {
    background-color: rgba(255,211,81,0.7);
  }

  .green{
    background-color: rgb(144,198,99);
  }

  .grey{
    background-color: rgb(51, 51, 53);
  }
</style>
