import React, { Component } from 'react';
import './index.css'
//遮罩层
import Modal from "../modal/index"
//滑动
import BScroll from '@better-scroll/core'
//订阅发布
import PubSub from "pubsub-js"
//redux
import { connect } from 'react-redux'
import {CateModulesAsync} from "../../redux/actions/actions"
@connect(state=>({home:state.home}),{CateModulesAsync})
class index extends Component {
  state={
    active:'tuijian',//选中的状态
    visible: false,
  }
  //切换选中状态
  changeActive=(type,index)=>{
    this.setState({
      active:type
    })
    if(type!=='tuijian'){
      //触发全局事件总线，跟新数据，将搜索框的搜索词重置
      PubSub.publish('isShow', false);
      //发布消息传递当前项数据
      // console.log('发布',this.cateModules[index]);
      const {cateModules} = this.props.home
      PubSub.publish('cateGroy', cateModules[index]);
    }else{
      PubSub.publish('isShow', true);
    }
  }
  //声明周期
  async componentDidMount(){
    //发送请求  必须是await 否则首次不会滑动
    await this.props.CateModulesAsync();
    //导航滑动初始化
    this.init();
  }
  componentDidUpdate(){
    // this.state.Bscroll.destroy()
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
    this._registerHooks(['scroll', 'scrollEnd'], () => {})
  };
  _registerHooks=(hookNames, handler)=> {
    hookNames.forEach((name) => {
    this.bs.on(name, handler)
    })
  }
  render() {
    //首页导航的数据
    const {cateModules} = this.props.home
    const {active} = this.state
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
        <div className="scroll-content">
          <div
          onClick={()=>this.changeActive('tuijian',0)}
          className={`scroll-item ${active==='tuijian'?'active':''}`} >推荐</div>
          {
            cateModules.map((item,index)=>{
              return <div key={index}
              onClick={()=>this.changeActive(item.name,index)}
              className={`scroll-item ${active===item.name?'active':''}`} 
              >{item.name}</div>
            })
          }
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
      active={this.state.active}
      cateModules={cateModules}
      changeActive={this.changeActive}
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