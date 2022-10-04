/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-13 15:45:57
 */
/*
 * @Descripttion: React Admin
 * @version: 1.0
 * @Author: zhuyannwen
 * @Date: 2022-09-13 15:45:57
 */
import request from './service'
export function getMenuList() {
    return request({
      url: 'api/menuList',
      method: 'post'
    })
  }