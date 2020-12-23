import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from "echarts";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
