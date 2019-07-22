import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex);
const store = new Vuex.Store({
  //待添加
  state:{
    sum:0,

  },
  mutations:{
    addSum(state,countItemSum){
      state.sum+=countItemSum;
    },
    decSum(state,countItemSum){
      state.sum-=countItemSum;
    }
  }
});
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
