/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: 对首页数据的请求
 * @Date: 2021-02-24 19:29:04
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 21:49:05
 */
import { request } from './request'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
