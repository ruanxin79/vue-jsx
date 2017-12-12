// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Mint from 'mint-ui';
import store from './vuex/store'
import Vuex from 'vuex'
import Axios from 'axios'

import './assets/css/reste.css'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.prototype.axios = Axios;
Vue.config.productionTip = false;
const back = "返回";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => (
    <div id="app">
      <mt-header title={store.state.title}>
        <router-link to="/" slot="left">
          <mt-button icon="back">{back}</mt-button>
        </router-link>
        <router-link slot="right" to="/hello">
          <mt-button icon="more" ></mt-button>
        </router-link>
        
      </mt-header>
      <router-view/>
    </div>
  ),//vue_jsx
  renderError(h, err) {
    return h('pre', {style: {color: 'red'}}, err.stack)
  }
});
