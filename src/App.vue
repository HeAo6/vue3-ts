<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登录</router-link>
  <router-link to="/main">首页</router-link>
  <router-view></router-view>
  <el-button type="primary">确定</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { ElButton } from 'element-plus'
// import 'element-plus/es/components/button/style/css'
export default defineComponent({
  name: 'App',
  components: { ElButton },
  setup() {
    const store = useStore()
    console.log(store)
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
