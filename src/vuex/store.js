import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !='production'
const state={
  userObject:{}
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug //在非生产环境下，使用严格模式

})
