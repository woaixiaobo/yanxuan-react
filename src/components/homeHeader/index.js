import React, { Component } from 'react';
import './index.css'
import Modal from "../modal/index"
class index extends Component {
  state={
    person:{
        name:"bozai",
        age:998
    },
    visible: false,
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
    <div className="horizontal-container" style={{display:!this.state.visible?'block':'none'}}>
      <div className="scroll-wrapper" >
        <div className="scroll-content" >
          <div className="scroll-item" >推荐</div>
          <div  
            className="scroll-item"
          ></div>
        </div>
      </div> 
    </div>
    {/* 右部三角遮罩 */}
    <div className="toggleWrap">
      <div className="linear"></div>
      <div className="toggle" onClick={this.modal}>
        <i></i>
      </div>
    </div>
    {/* <!-- 遮罩层 --> */}
    {/* <van-overlay >
      <div className="block">
        <p>全部频道</p>
        <div className="navItem2" >
          <span  >推荐</span>
          <span></span>
        </div>
      </div>
    </van-overlay> */}
    <Modal title="bozai" 
      content={
        <div className="toggleWrap">
        <div className="linear"></div>
        <div className="toggle" onClick={this.modal}>
          <i></i>
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