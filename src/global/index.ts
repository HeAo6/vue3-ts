import 'element-plus/dist/index.css'
import { App } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import {
  ElButton,
  ElAlert,
  ElCheckbox,
  ElForm,
  ElTabPane,
  ElTabs,
  ElFormItem,
  ElInput,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElRow,
  ElCol
} from 'element-plus'
const components = [
  ElButton,
  ElAlert,
  ElCheckbox,
  ElForm,
  ElTabs,
  ElTabPane,
  ElFormItem,
  ElInput,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElIcon,
  Fold,
  Expand,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElRow,
  ElCol
]
//通过便利注册所有的组件全集
export function registerApp(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
