<template>
  <!-- vue3页面 -->
  <div class="user">
    用户管理
    <div class="search">
      <baseForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import baseForm from '@/base-ui/form/index.vue'
export default defineComponent({
  components: {
    baseForm
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
