<template>
  <div>
    pageC
    </br>
    </br>
    <router-link to="pageA">pageA</router-link>
    </br>
    <router-link to="pageB">pageB</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      c: null
    }
  },
  beforeCreate () {
    console.log('pageC beforeCreate')
  },
  created () {
    console.log('pageC created')
  },
  beforeMount () {
    console.log('pageC beforeMount')
  },
  mounted () {
    console.log('pageC mounted')
  },
  activated () {
    console.log('pageC activated')
  },
  deactivated () {
    console.log('pageC deactivated')
  },
  beforeUpdate () {
    console.log('pageC beforeUpdate')
  },
  updated () {
    console.log('pageC updated')
  },
  beforeDestroy () {
    console.log('pageC beforeDestroy')
  },
  destroyed () {
    console.log('pageC destroyed')
  }
}
</script>
