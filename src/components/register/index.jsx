import React, { Component } from 'react'
import "./index.css"
export default class index extends Component {
  render() {
    return (
      <div className="register">
        {/* <!-- logo --> */}
        <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
        {/* <!-- 表单 --> */}
        <div className="from">
          <form action="">
            <input className="inputcom" type="text" placeholder="请输入手机号"/> <br/>
            <input className="inputcom" type="password" placeholder="请输入短信验证码"/>
            <div className="problems">
                <span>遇到问题 ?</span>
                <span>使用密码验证登录</span>
              </div>
              <div style={{margin:'16px 16px 0px 16px'}}>
                <button type="submit">
                  提交
                </button>
              </div>
              <div className="bottom">
                <input type="checkbox" name="check" v-model="checked" value="1"/>
                <i ></i>
                <div className="serve">
                  <span>我同意</span>
                  <a href="##">《服务条款》</a>
                  <span>和</span>
                  <a href="##">《网易隐私政策》</a>
                </div>
              </div>
            <div className="loginMethod">
              <span>其他登录方式</span>
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
