import Home from "../pages/home"
import Personal from "../pages/personal"
import Classify from "../pages/classify"
import DeserveBuy from "../pages/deserveBuy"
import CarShop from "../pages/carShop"
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
    path:'/classify',
    component:Classify,
    title:'分类'
  },
  {
    path:'/deserveBuy',
    component:DeserveBuy,
    title:'值得买'
  },
  {
    path:'/carShop',
    component:CarShop,
    title:'购物车'
  },
  {
    path:'/personal',
    component:Personal,
    title:'个人中心'
  }
]
export default routers