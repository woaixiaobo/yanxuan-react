import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
//引入css文件
import './index.css'
@withRouter
class index extends Component {
  state = {
    activeFlag:'home',//选中的标识
  }
  componentDidMount(){
    console.log(this.props.history);
  }
  changeActive(type){
    //跟新界面
    let {activeFlag} = this.state
    activeFlag = type
    this.setState({
      activeFlag,
    })
    //跳转到对应的界面
    this.props.history.push(`/${type}`)
    // if(type==='personal'){
    //    //如果点击的是个人中心触发全局事件总线，
    //   // this.$bus.$emit('isPersonal',false)
    //   console.log(1);
    // }
    // else{
    //   // this.$bus.$emit('isPersonal',true)
    // }
  }
  render() {
    let {activeFlag} = this.state
    return (
      <div className="navBottom" >
        <div className="navItem" onClick={()=>this.changeActive('home')}>
            <i className={`${activeFlag==='home'?'active':''}`}></i>
            <span className={`${activeFlag==='home'?'active':''}`}>首页</span>
        </div>
        <div className="navItem"  onClick={()=>this.changeActive('classify')}>
          <i className={`${activeFlag==='classify'?'active':''}`}></i>
          <span className={`${activeFlag==='classify'?'active':''}`}>分类</span>
        </div>
        <div  className="navItem"  onClick={()=>this.changeActive('DeserveBuy')}>
            <i className={`${activeFlag==='DeserveBuy'?'active':''}`}></i>
            <span className={`${activeFlag==='DeserveBuy'?'active':''}`}>值得买</span>
        </div>
        <div className="navItem"  onClick={()=>this.changeActive('carShop')}>
            <i className={`${activeFlag==='carShop'?'active':''}`}></i>
            <span className={`${activeFlag==='carShop'?'active':''}`}>购物车</span>
        </div>
        <div  className="navItem"  onClick={()=>this.changeActive('personal')}>
            <i className={`${activeFlag==='personal'?'active':''}`}></i>
            <span className={`${activeFlag==='personal'?'active':''}`}>个人</span>
        </div>
    </div>
    )
  }
}

export default index