<template>
  <!-- vue3页面 -->
  <div class="user">
    <div class="search">
      <el-form :label-width="labelWidth">
        <el-row>
          <template v-for="item in formItems" :key="item.label">
            <el-col v-bind="callLayout">
              <el-form-item :label="item.label">
                <template v-if="item.type === 'input' || item.type === 'password'">
                  <el-input
                    :placeholder="item.placeholder"
                    :show-password="item.type === 'password'"
                  ></el-input>
                </template>
                <template v-else-if="item.type === 'select'">
                  <el-select :placeholder="item.placeholder">
                    <el-option
                      v-for="option in item.options"
                      :value="option.value"
                      :key="option.value"
                    >
                      {{ option.title }}
                    </el-option>
                  </el-select>
                </template>
                <!-- 批量绑定v-bind -->
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker v-bind="item.otherOptions"></el-date-picker>
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { IFormItem } from '../form/type/index'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'baseForm',
  props: {
    formItem: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    callLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px
        lg: 8, // ≥1200px
        md: 12, // ≥992px
        sm: 24, // ≥768px
        xs: 24 // <768px
      })
    }
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      { type: 'password', label: '密码', placeholder: '请输入密码' },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请输入喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请输入创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return { formItems }
  }
})
</script>

<style scoped></style>
