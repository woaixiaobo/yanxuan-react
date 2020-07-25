import Home from "../pages/home/index.jsx"
import Personal from "../pages/personal/index.jsx"
import Classify from "../pages/classify/index.jsx"
import DeserveBuy from "../pages/deserveBuy/index.jsx"
import CarShop from "../pages/carShop/index.jsx"
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