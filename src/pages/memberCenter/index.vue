<template lang="html">
  <h1>{{user.userName}}</h1>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:mapState({user:state=>state.user})
}
</script>

<style lang="less">
</style>
