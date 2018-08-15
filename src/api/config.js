import Qs from 'qs';

export default {
  baseURL: 'http://127.0.0.1:8080',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  },
  params: {},
  timeout: 10000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
  maxRedirects: 5,
  transformRequest: [data => Qs.stringify(data)],
  paramsSerializer: params => Qs.stringify(params),
  data: {}
};
