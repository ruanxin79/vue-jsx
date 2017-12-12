import Vue from 'vue'
import Router from 'vue-router'
import app from '../app'
import hello from '../components/hello_JSX'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    }, {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})
