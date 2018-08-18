<template>
  <div id="report">
    <Table width="100%" height="850"  border :columns="columns2" :data="data3" class="tab"></Table>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        columns2: [
          {
            title: '指标',
            key: 'zb',
            // width: "6%",
            fixed: 'left',
            align:'center',
            height:300,
          },
          {
            title: '计量单位',
            key: 'jldw',
            // width: "6%",
            align:'center',
            height:300,
          },
          {
            title: '年度计划',
            key: 'ndjh',
            // width: "6%",
            align:'center'
          },
          {
            title: '月计划',
            key: 'yjh',
            // width: "6%",
            align:'center'
          },
          {
            title: '本月',
            // width: "36%",
            align:'center',
            height:300,
            children:[
              {
                title:'2018年4月',
                key:'ybn4y',
                // width: "20%",
                align:'center',
              },
              {
                title:'2017年4月',
                key:'yqn4y',
                // width: "20%",
                align:'center',
              },
              {
                title:'比月计划',
                key:'byjh',
                // width: "20%",
                align:'center',
              },
              {
                title:'比年计划进度',
                key:'bnjhjd',
                // width: "20%",
                align:'center',
              },
              {
                title:'比去年同期',
                // width:"40%",
                align:'center',
                children:[
                  {
                    title:'数值',
                    key:'bysz',
                    // width:"50%",
                    align:'center',
                  },{
                    title:'增幅(%)',
                    key:'byzf',
                    // width:"50%",
                    align:'center',
                  }
                ]
              },
            ]
          },
          {
            title: '本年',
            // width: "36%",
            align:'center',
            children:[
              {
                title: '2018/1-2018/4',
                align:'center',
                key: 'ybnys',
                // width: "20%"
              },
              {
                title: '2017/1-2018/4',
                key: 'yqnys',
                align:'center',
                // width: "20%"
              },
              {
                title: '比年度计划',
                // width: "40%",
                align:'center',
                children:[
                  {
                    title:'进度数值',
                    key:'jdsz',
                    align:'center',
                    // width: "50%"
                  },
                  {
                    title:'完成(%)',
                    key:'wc',
                    align:'center',
                    // width: "50%"
                  }
                ]
              },
              {
                title: '比去年同期',
                // width: '12%',
                align:'center',
                children:[
                  {
                    title:'数值',
                    align:'center',
                    key:'bnsz',
                    // width: '6%',
                  },
                  {
                    title:'增幅(%)',
                    align:'center',
                    key:'bnzf',
                    // width: '6%',
                  }
                ]
              },
            ]
          },
          ],
        data3: [
          {
            zb: '运输收入',
            jldw: '亿元',
            ndjh: '693.29',
            yjh: '58.2615',
            ybn4y: '58.29243806',
            yqn4y:52.98824682,
            byjh: 0.03,
            bnjhjd: 1.31,
            bysz: 5.30,
            byzf: 10.0,
            ybnys: 225.51,
            yqnys: 204.08,
            jdsz: -2.42,
            wc: 32.5,
            bnsz: 21.43,
            bnzf:10.5
          },
          {
            zb: '旅客发送量',
            jldw: '万人',
            ndjh: '44990',
            yjh: '3838.20',
            ybn4y: '3908.02',
            byjh: 3523.24,
            bnjhjd: 69.82,
            bysz: 210.21,
            byzf: 384.78,
            ybnys: 10.9,
            yqnys: 14816.31,
            jdsz: 13446.90,
            wc: 25.08,
            bnsz: 100000,
            bnzf:10000
          },
          ]
      };
    }
  };
</script>

<style scoped>
  .tab{
    margin: 0 auto;
  }

</style>
