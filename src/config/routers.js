import Home from "../pages/home"
import Personal from "../pages/personal"

const routers = [
  {
    path:'/',
    component:Home,
    title:'首页'
  },
  {
    path:'/home',
    component:Home,
    title:'首页'
  },
  {
    path:'/personal',
    component:Personal,
    title:'个人中心'
  }
]
export default routers