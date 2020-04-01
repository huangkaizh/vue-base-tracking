import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/common.less' // 引入公共样式
// import './lib/tracking'
import 'web-event-tracking/dist/index.min'
import VConsole from 'vconsole'

window.tracking.setConfig({
  trackingServerUrl: 'http://pushdata.zcmorefun.com/', // 埋点服务器接口url
  appid: 'e1a51f2257934e99',
  token: 'MzExNTg4NjkzNjMwNzc3\u003d',
  distinctIdKey: 'distinctId', // cookie中用来存区分用户的key
  sourceKey: 'source', // url中用来标记来源渠道的key
  defaultSource: 'message', // 默认来源渠道
  interval: 5000 // 发送间隔
})

Vue.prototype.$vConsole = new VConsole()

window.Promise = Promise // 解决ie浏览器中Promise未定义报错， 参考https://www.cnblogs.com/wonyun/p/8076453.html

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#root',
  render: h => h(App)
})
