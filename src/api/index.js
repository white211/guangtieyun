/* eslint-disable no-console */

import axios from 'axios';
// import {Message} from 'element-ui';
import swal from 'sweetalert';
import config from './config';
import router from './../router';
import store from './../store';
import globalConfig from './../config';

const api = axios.create(config);

// http request 拦截器
api.interceptors.request.use((req) => {
  // eslint-disable-next-line no-param-reassign
  if (store.state.token) {
    req.headers.Authorization = store.state.token;
  }
  return req;
}, error => Promise.reject(error));

// http response 拦截器
api.interceptors.response.use(res => {

  // let flag =false ;
  // if(router.currentRoute.path.indexOf("/note/shareNote")>-1){
  //    flag = true;
  // }

  const isNotAuthPath = globalConfig.notAuthPaths.indexOf(router.currentRoute.path) > -1;
  if (!isNotAuthPath && res.status === 401) {
    // token 过期
    swal({
      title:'',
      text:'登录已过期',
      icon:'error',
      button:false,
      timer:2000
    }).then((res)=>{
      store.commit('token', null);
      store.commit('user', null);
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.path,
        },
      });
    });
  } else if (Math.floor(res.status / 100) === 5) {
    swal({
      title:'',
      text:'服务器出了点问题，请稍候再试！',
      icon:'error',
      button:false,
      timer:2000
    });
  } else {
    // throw error;
    return res;
  }
  // return res;
}, (error) => {
  const res = error.response;
  if (!res) {
    swal({
      title:'',
      text:'(500)服务器出了点意外！',
      icon:'error',
      button:false,
      timer:2000
    });
    throw error;
  }
});

export default api;
