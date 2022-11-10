<template>
  <div>
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="phone.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primay" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const phone = reactive({
      phoneNum: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 20px;
}
</style>
