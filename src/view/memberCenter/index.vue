<template>
  <h1>你好啊{{userObject.userName}}</h1>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState([
      'userObject'
    ])
  }
}
</script>

<style lang="less">
</style>
