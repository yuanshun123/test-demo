import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'
import test from '@/components/test'
import hebao from '@/components/hebao'
import tests from '@/components/tests'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/test',
            name:tests,
            component:tests
      
          }, {
            path:'/test1',
            name:test,
            component:test
      
          },
          {
            path:'/hebao',
            name:hebao,
            component:hebao
      
          },
        
  ]

})