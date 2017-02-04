import Vue from 'vue'
import * as types from './types'
export default {
  state: JSON.parse(sessionStorage.getItem('user')) || {},
  mutations: {
    [types.USER_SIGNIN](state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      Object.assign(state, user)
    },
    [types.USER_SINGOUT](state) {
      sessionStorage.removeItem('user');
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [types.USER_SIGNIN]({
      commit
    }, user) {
      commit(types.USER_SIGNIN, user)
    },
    [types.USER_SINGOUT]({
      commit
    }) {
      commit(types.USER_SINGOUT)
    }
  }

}
