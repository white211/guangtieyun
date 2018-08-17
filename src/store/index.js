import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({

  plugins: [createPersistedState()],

  state: {
    token: '',
    lastAuthTime: Date.now(),
    user: null,
    account: null,
    listData: [],
    allData:{},
    leftChart1:[],
    leftChart2:[],
    rightChart1:[],
    rightChart2:[]
  },
  mutations: {
    listData(state,val){
        state.listData = val;
    },
    allData(state,val){
       state.allData = val;
    },
    leftChart1(state,val){
      state.leftChart1 = val;
    },
    leftChart2(state,val){
      state.leftChart2 = val;
    },
    rightChart1(state,val){
      state.rightChart1 = val;
    },
    rightChart2(state,val){
      state.rightChart2 = val;
    }
  },
});

export default store;
