
<template >
  <!-- 必须嵌套一层，否则会报错 -->
  <form class="" v-on:submit.prevent="submit">
    <group>
       <x-input title="用户名" name="username" placeholder="请输入用户名" required v-model="loginForm.userName"></x-input>
       <x-input title="密码" type="password" name="username" placeholder="请输入密码" required v-model="loginForm.userPassword"></x-input>
    </group>
    <group>
      <x-button  type="primary" >sign in</x-button>
    </group>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../../vuex/user'
import { XInput,Group,Cell,XButton} from 'vux'
export default {
  components:{
    XInput,
    Group,
    Cell,
    XButton
  },
  data(){
    return{
      loginForm:{
        userName:'',
        userPassword:''
      }
    }
  },
  methods:{
    ...mapActions([USER_SIGNIN]),
    submit(){
      if(!this.loginForm.userName || !this.loginForm.userPassword) return
      this.USER_SIGNIN(this.loginForm)
      this.$router.replace({ path: '/membercenter'})
    }
  }
}
</script>

<style lang="less">

</style>
