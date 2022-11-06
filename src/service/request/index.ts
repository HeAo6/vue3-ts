import axios from 'axios'
//类具有更多的封装性
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus'

class HYRequest {
  //声明互不干扰的两个axios实例为了进行设置baseUrl时不会无法修改
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  //给类型的注解换成新的接口
  constructor(config: HYRequestConfig) {
    //创建实例
    this.instance = axios.create(config)
    // 保存起来拦截器
    this.interceptors = config.interceptors
    //显示加载 ??如果左边为真则返回左边的值 否则返回右边的值
    this.showLoading = config.showLoading ?? true
    //使用请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    //使用相应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //给所有实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          ElLoading.service().close()
        }, 1000)
        return res
      },
      (err) => {
        ElLoading.service().close()
        return err
      }
    )
  }
  //给单独的请求封装拦截器
  request<T>(config: HYRequestConfig): Promise<T> {
    //从哪里请求就在那里通过.then获取数据
    return new Promise((reslove, reject) => {
      // 1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否需要loading加载动画
      if (config.showLoading) {
        this.showLoading = config.showLoading
      }
      this.instance.request(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        // reslove()
        console.log(res)
      })
    })
  }
}

export default HYRequest
