//service出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
//拿到实例进行默认导出
const requestTool = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //使用接口定义后传入对象形式
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch(err) {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor(config) {
      console.log('响应成功的拦截')
      return config
    },
    responseInterceptorCatch(err) {
      console.log('响应失败的拦截')
      return err
    }
  }
})
export default requestTool
