import Vue from 'vue'
import Febs from './FEBS'
import router from './router'
import Antd from 'ant-design-vue'
import store from './store'
import request from 'utils/request'
import db from 'utils/localstorage'
import VueApexCharts from 'vue-apexcharts'

import 'ant-design-vue/dist/antd.css'

import 'utils/install'

import echarts from 'echarts'


//自定义全局样式引入
import './assets/cy_style_button.css';
import './assets/cy_style_modal.css';
//moment
import moment from 'moment'//导入文件 
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(db)
Vue.use(VueApexCharts)
Vue.use(moment);



Vue.component('apexchart', VueApexCharts)

Vue.use({
  install (Vue) {
    Vue.prototype.$db = db
    Vue.prototype.$Moment=moment
  }
})

Vue.prototype.$post = request.post
Vue.prototype.$ipost = request.ipost
Vue.prototype.$get = request.get
Vue.prototype.$put = request.put
Vue.prototype.$delete = request.delete
Vue.prototype.$export = request.export
Vue.prototype.$download = request.download
Vue.prototype.$upload = request.upload

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(Febs)
}).$mount('#febs')
