import axios from "axios"

//第一步配置通用的基础路径和超时
const instance = axios.create({
  // baseURL:'/api',//基础路径
  timeout:5000,//请求超时时间
})


export default instance