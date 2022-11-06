/* import axios from 'axios'
//直接导入就能获取axios的实例
axios.get('http://123.207.32.32:8000/home/multidata').then(({ data: res }) => {
  console.log(res.data)
})

//请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (err) => {
    console.log(err)
    return err
  }
)

//相应拦截器
axios.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    console.log(err)
    return err
  }
)
 */
