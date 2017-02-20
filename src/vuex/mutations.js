import * as types from './mutations-types'
export default{
  [types.USER_SIGNIN](state,user){
    sessionStorage.setItem('user',JSON.stringify(user))
    Object.assign(state.userObject,user)
  },
  [types.USER_SINGOUT](state){
    sessionStorage.removeItem('user')
    Object.keys(state).forEach(k=>Vue.delete(user,k))
  }
}
