<template>
  <div>
    pageA
    <PageAChild />
    <span>{{ obj.a }}</span>
    </br>
    </br>
    <router-link to="pageB">pageB</router-link>
    </br>
    <router-link to="pageC">pageC</router-link>
  </div>
</template>

<script>
import PageAChild from '../components/pageA/PageAChild.vue'
export default {
  components: {
    PageAChild
  },
  data() {
    return {
      obj: {
        a: 1
      }
    }
  },
  beforeCreate() {
    console.log('pageA beforeCreate')
  },
  created() {
    console.log('pageA created')
  },
  beforeMount() {
    console.log('pageA beforeMount')
  },
  mounted() {
    console.log('pageA mounted')
  },
  activated() {
    console.log('pageA activated')
  },
  deactivated() {
    console.log('pageA deactivated')
  },
  beforeUpdate() {
    console.log('pageA beforeUpdate')
  },
  updated() {
    console.log('pageA updated')
  },
  beforeDestroy() {
    console.log('pageA beforeDestroy')
  },
  destroyed() {
    console.log('pageA destroyed')
  },
  errorCaptured(err, vm, info) {
    console.log('pageA errorCaptured')
    console.log('err', err)
    console.log('vm', vm)
    console.log('info', info)
    return false
  }
}
</script>
