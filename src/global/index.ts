import 'element-plus/dist/index.css'
import { App } from 'vue'
import { ElButton, ElAlert, ElCheckbox, ElForm } from 'element-plus'
const components = [ElButton, ElAlert, ElCheckbox, ElForm]

export function registerApp(app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
