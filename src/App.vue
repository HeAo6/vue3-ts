<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// import 'element-plus/es/components/button/style/css'
export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store)
  }
})
</script>

<style lang="less"></style>
