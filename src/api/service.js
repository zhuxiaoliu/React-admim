/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-13 14:44:04
 */
import axios from 'axios'
import {notification} from 'antd'
import {BASE_PARAM} from '../config/settings'
import { getToken } from '../utils/auth'
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";
const createFormData = param => {
  const formData = new FormData()
  for (const key in param) {
    formData.append(key, param[key])
  }
  return formData
}
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 30000
    /*headers: {
      'Cache-Control': 'no-cache'
    }*/
  }); /* 请求拦截器 */
  service.interceptors.request.use(
    (config) => {
      if (getToken()) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
      }
      config.headers['Content-Type'] = 'application/json'
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.headers['Access-Control-Allow-Methods'] = 'POST,GET,OPTIONS,DELETE'
      config.headers['Access-Control-Max-Age'] = '3600'
      config.headers['Access-Control-Allow-Headers'] = 'x-requested-with,Authorization'
      config.headers['Access-Control-Allow-Credentials'] = 'true'
      // url 要是以api开头的接口是框架api 就不加BASE_PARAM
      const reg = /^api.*/
      if (config.method === 'post' && !reg.test(config.url)) {
        if (config.requestBodyType === 'FormData') {
          config.data = createFormData({ ...BASE_PARAM, ...config.data })
        } else {
          config.data = { ...BASE_PARAM, ...config.data }
        }
      }
      // * 如果当前请求不需要显示 loading,在api服务中通过指定的第三个参数: { noLoading: true } }来控制不显示loading
			config.noLoading || showFullScreenLoading();
      return config
    },
    error => {
    console.log(error) // for debug
    Promise.reject(error)
    }
  );
/* 响应拦截器 */
service.interceptors.response.use(
    (res) => {
      // 在这里配置响应拦截器
      tryHideFullScreenLoading();
      return res.data;
    }, error => {
      tryHideFullScreenLoading();
      notification.error({message: '网络请求超时'})
    }
  );
  
  export default service;