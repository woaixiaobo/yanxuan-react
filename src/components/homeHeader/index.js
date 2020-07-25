import React, { Component } from 'react';
import './index.css'
import Modal from "../modal/index"
import BScroll from '@better-scroll/core'
import { connect } from 'react-redux'
import {CateModulesAsync} from "../../redux/actions/actions"
@connect(state=>({home:state.home}),{CateModulesAsync})
class index extends Component {
  state={
    person:{
        name:"bozai",
        age:998
    },
    visible: false,
  }
  componentDidMount(){
    //发送请求
    console.log(this.props.home);
    this.props.CateModulesAsync();
    //导航滑动初始化
    this.init();
  }
  //是否显示遮罩层
  modal=()=>{
    const {visible} = this.state
    //跟新状态
    this.setState({
      visible:!visible,
    })
  }
  //遮罩层点击
  hiddenModal=()=>{
    this.setState({
        visible:false
    })
  }
   //导航滑动
  init=()=> {
    this.bs = new BScroll('.scroll-wrapper', {
      mouseWheel:true,
      disableTouch:false,
      disableMouse:false,
      resizePolling:0,
      click:true,//开启点击事件
      scrollX: true,
      probeType: 3 // listening scroll hook
    })
    this._registerHooks(['scroll', 'scrollEnd'], () => {
      // console.log('done')
    })
  };
  _registerHooks=(hookNames, handler)=> {
    hookNames.forEach((name) => {
      this.bs.on(name, handler)
    })
  }
  render() {
    return (
      <div className="header">
      {/* 搜索  */}
    <div className="search">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt=""/>
      <div className="in">
        <i></i>
        <span>搜索商品, 共34101款好物</span>
      </div>
      <div className="btn">登录</div>
    </div>
      {/* 导航  */}
    <div className="horizontal-container">
      <div className="scroll-wrapper" >
        <div className="scroll-content" >
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          <div className="scroll-item" >推荐</div>
          
          <div  className="scroll-item"></div>
        </div>
      </div> 
    </div>
    {/* 右部三角遮罩 */}
    <div className="toggleWrap">
      <div className="linear"></div>
      <div className="toggle" onClick={this.modal}>
        <i className={this.state.visible?'statle':'none'}></i>
      </div>
    </div>
    {/* <!-- 遮罩层 --> */}
    <Modal title="bozai" 
      content={
        <div className="toggleWrap">
        <div className="linear"></div>
        <div className="toggle" onClick={this.modal}>
          <i className={this.state.visible?'statle':'none'}></i>
        </div>
      </div>}
      visible={this.state.visible}
      hiddenModal={this.hiddenModal}
    /> 
  </div>
    );
  }
}

export default index;