/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 19:24:27
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 19:28:56
 */
import axios from 'axios'

export function request (config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送网络请求
  return instance(config)
}
