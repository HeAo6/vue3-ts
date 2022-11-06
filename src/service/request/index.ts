import axios from 'axios'
//类具有更多的封装性
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
class HYRequest {
  //声明互不干扰的两个axios实例为了进行设置baseUrl时不会无法修改
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  //给类型的注解换成新的接口
  constructor(config: HYRequestConfig) {
    //创建实例
    this.instance = axios.create(config)
    // 保存起来拦截器
    this.interceptors = config.interceptors
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
      (config) => config,
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => res,
      (err) => err
    )
  }
  //给单独的请求封装拦截器
  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
