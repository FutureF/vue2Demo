<template lang="html">
  <h1>hello{{userObject.userName}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState([
      'userObject'
    ])
  }
}
</script>

<style lang="css">
</style>
