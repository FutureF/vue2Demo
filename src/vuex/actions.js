
import * as types from './mutations-types'
export default{
  signIn({commit},user){
    commit(types.USER_SIGNIN,user)
  },
  signOut({commit}){
    commit(types.USER_SINGOUT)
  }
}
