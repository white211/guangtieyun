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
  },
  mutations: {},
});

export default store;
