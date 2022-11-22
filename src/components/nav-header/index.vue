<template>
  <!-- vue3页面 -->
  <div class="nav-header">
    <el-icon class="icon-fold" v-show="isFold" @click="handleFold"><Fold /></el-icon>
    <el-icon class="icon-fold" v-show="!isFold" @click="handleFold"><Expand /></el-icon>

    <div class="nav-bread">
      <NavBreadCrumb></NavBreadCrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBreadCrumb from '@/components/nav-breadcrumb/index.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    NavBreadCrumb
  },
  setup(props, { emit }) {
    console.log(NavBreadCrumb)

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
