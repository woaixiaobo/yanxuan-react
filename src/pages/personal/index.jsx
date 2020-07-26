import React, { Component } from 'react'
import "./index.css"
export default class index extends Component {
  // componentDidMount(){
  //   console.log(this.props.history);
  // }
  render() {
    return (
      <div className="responalContainer">
        {/* <!-- 头部 --> */}
        <div className="responalHeader">
            <div className="left">
              <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" />
              <div className="user">
                <p>严选用户18712919926</p>
                <p>VIP高级用户</p>
              </div>
            </div>
            <div className="right">
              <div className="icon">
                <i></i>
              </div>
              <div className="pro">
                <i></i>
                <div className="p">
                  <p>Pro会员</p>
                  <p>立即使用</p>
                  <i></i>
                </div>
              </div>
            </div>
        </div>
        {/* <!-- 我的资产 --> */}
        <div className="myAsset">
          <div className="top">我的资产</div>
          <div className="bottom">
            <ul className="bottomList">
              <li className="item">
                <span>￥0</span>
                <span>回馈金</span>
              </li>
              <li className="item">
                <span>1</span>
                <span>红包</span>
              </li>
              <li className="item">
                <span>1</span>
                <span>优惠券</span>
              </li>
              <li className="item"> 
                <span>￥0</span>
                <span>津贴</span>
              </li>
              <li className="item">
                <span>0</span>
                <span>礼品卡</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- 我的订单等选项 --> */}
        <ul className="Menu">
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li className="item"> 
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li  className="item"> 
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li className="item">
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
          <li className="item">
            <i></i>
            <span>我的订单</span>
          </li>
          <li>
            <i></i>
            <span>我的订单</span>
          </li>
        </ul>
        {/* <!-- 退出登录 --> */}
        <div class="denglu">退出登录</div>
      </div>
    )
  }
}
