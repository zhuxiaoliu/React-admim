/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-16 16:10:24
 */
import request from './service'
export function getRoadBar () {
    return request({
      url: 'dataScreen/roadBar',
      method: 'post'
    })
  }