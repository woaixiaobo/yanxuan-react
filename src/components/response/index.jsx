import React, { Component } from 'react'
import ThreeIcon from "../../components/threeIcon/index"
import PubSub from "pubsub-js"
import "./index.css"
export default class index extends Component {
  componentDidMount(){
    //如果是登录页面则是没有底部导航的
    PubSub.publish('isResponse', false);
  }
  render() {
    return (
      <div className="personal">
        <ThreeIcon title="小博专属" background="#fafafa"/>
        <div className="logoWarp">
          <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
          <div className="login">
            <div className="phone comon">
              <i></i>
              <span >手机号快捷登录</span>
            </div>
            <div className="email comon">
              <i></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="wexin">
              <i className="iconfont icon-gongzhonghao"></i>
              <span >微信</span>
            </div>
            <div className="qq">
              <i className="iconfont icon-qq"></i>
              <span >QQ</span>
            </div>
            <div className="weibo">
              <i className="iconfont icon-weibo"></i>
              <span>微博</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
