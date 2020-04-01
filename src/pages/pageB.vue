<template>
  <div>
    pageB
    <div class="click-area red" @click.stop.prevent="clickFunc($event)">
      clickArea
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: null
    }
  },
  beforeCreate() {
    console.log('pageB beforeCreate')
  },
  created() {
    console.log('pageB created')
  },
  beforeMount() {
    console.log('pageB beforeMount')
  },
  mounted() {
    console.log('pageB mounted')
  },
  activated() {
    console.log('pageB activated')
  },
  deactivated() {
    console.log('pageB deactivated')
  },
  beforeUpdate() {
    console.log('pageB beforeUpdate')
  },
  updated() {
    console.log('pageB updated')
  },
  beforeDestroy() {
    console.log('pageB beforeDestroy')
  },
  destroyed() {
    console.log('pageB destroyed')
  },
  methods: {
    clickFunc(e) {
      console.log('clickFunc')
      window.tracking.click(e)
    }
  }
}
</script>

<style scoped>
.click-area {
  width: 100%;
  height: 300vh;
  background: red;
}
</style>
