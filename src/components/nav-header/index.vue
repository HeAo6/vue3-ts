<template>
  <!-- vue3页面 -->
  <div class="nav-header">
    <el-icon class="icon-fold" v-show="isFold" @click="handleFold"><Fold /></el-icon>
    <el-icon class="icon-fold" v-show="!isFold" @click="handleFold"><Expand /></el-icon>
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">homepage</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    //处理图标的切换
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFold
    }
  }
})
</script>

<style scoped>
.nav-header {
  display: flex;
}
.icon-fold {
  font-size: 28px;
  cursor: pointer;
}
</style>
