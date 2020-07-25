import React, { Component } from 'react'
//引入路由
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//引入路由的配置
import routers from "./config/routers"
import NavBottom from "./components/navBottom/index"
//引入初始化样式
import "./assets/css/reset.css"
export default class App extends Component {
  //遍历保存路由当中的所有组件
  renderRouters=()=>{
    //创建存放路由的容器
    const renderRoutes = [];
    routers.forEach(route => {
      renderRoutes.push(<Route key={route.path} path={route.path} component={route.component} exact/>)
    });
    return renderRoutes
  }
  render() {
    return (
      <BrowserRouter>
        <NavBottom/>
        <Switch>
          {this.renderRouters()}
        </Switch>
      </BrowserRouter>
    )
  }
}
