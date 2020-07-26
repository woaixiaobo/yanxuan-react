import React, { Component } from 'react'
//引入路由
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//引入路由的配置
import routers from "./config/routers"
import NavBottom from "./components/navBottom/index"
import PubSub from "pubsub-js"
//引入初始化样式
import "./assets/css/reset.css"
export default class App extends Component {
  state = {
    isResponse:true,
  }
  //遍历保存路由当中的所有组件
  renderRouters=()=>{
    //创建存放路由的容器
    const renderRoutes = [];
    routers.forEach(route => {
      renderRoutes.push(<Route key={route.path} path={route.path} component={route.component} exact/>)
    });
    return renderRoutes
  }
  isNavBottom=()=>{
    const {isResponse}  = this.state
    if(isResponse){
      return <NavBottom/>
    }
  }
  //生命周期函数
  componentDidMount(){
    PubSub.subscribe('isResponse', (msg,data)=>{
      console.log('订阅',data);
      this.setState({
        isResponse:data
      })
    })
  }
  render() {
    const {isResponse} = this.state
    return (
      <BrowserRouter>
        {this.isNavBottom()}
        <Switch>
          {this.renderRouters()}
        </Switch>
      </BrowserRouter>
    )
  }
}
