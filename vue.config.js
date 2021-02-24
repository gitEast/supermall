const { useCssModule } = require("vue");

/*
 * @version: 1.0
 * @Author: East Wind
 * @Description: About this file
 * @Date: 2021-02-24 14:49:00
 * @LastEditors: East Wind
 * @LastEditTime: 2021-02-24 14:53:45
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {//配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
