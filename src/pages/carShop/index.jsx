import React, { Component } from 'react';
import "./index.css"
class index extends Component {
  render() {
    return (
      <div className="carShop">
        {/* <!-- 头部区域 --> */}
        <div className="carShopHeader">
          <p>购物车</p>
          <p>领券</p>
        </div>
        {/* <!-- 说明三标识 --> */}
        <div className="servicePolicy">
          <div className="item">
            <i className=""></i>
            <span>30天无忧退货</span>
          </div>
          <div className="item ">
            <i className=""></i>
            <span>48小时快速退款</span>
          </div>
          <div className="item">
            <i></i>
            <span>满99元免邮费</span>
          </div>
        </div>
        {/* <!-- 购物车图标 --> */}
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" />
        {/* <!-- 登录按钮 --> */}
        <div className="login">登录</div>
      </div>
    );
  }
}

export default index;