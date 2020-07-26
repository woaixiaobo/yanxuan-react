import React, { Component } from 'react';
import ThreeIcon from "../../components/threeIcon/index"
import BuySwiper from "../../components/buySwiper"
import "./index.css"
class index extends Component {
  render() {
    return (
      <div className="buy">
        {/* 头部 */}
        <ThreeIcon title="值得买"/>
        {/* <!-- 卡片区域 --> */}
        <div className="swiperTabContainer">
          <div className="swiperTab">
            <img src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" />
            <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" />
            <div className="title">
              <span>严选好物</span>
              <span>用心生活</span>
            </div>
          </div>
        {/* <!-- 滑动区域 --> */}
          <div className="scroll">
            {/* <!-- 引入轮播图组件 --> */}
            <BuySwiper/>
          </div>
        </div>
      </div>
    );
  }
}

export default index;