import React, { Component } from 'react'
import {register} from "../../config/api/index"
import PubSub from "pubsub-js"
import {withRouter} from "react-router-dom"
import "./index.css"
@withRouter
class index extends Component {
  state = {
    phone:'',
    password:'',
  }
  //收集输入的数据
  change=(e,type)=>{
    if(type==='phone'){
      // console.log(e.target.value.trim(),type);
      this.setState({
        phone:e.target.value.trim(),
      })
    }else{
      // console.log(e.target.value.trim(),type);
      this.setState({
        password:e.target.value.trim(),
      })
    }
  }
  //点击登录
  onSubmit=async()=>{
    const {phone,password} = this.state
    let result = await register({
      user:phone,
      code:password
    })
    if(result.data.code===200){
      if(!localStorage.getItem("user")){
        localStorage.setItem("user",JSON.stringify(result.data.name))
      }
      PubSub.publish('isResponse', true);
      // this.$toast('登录成功');
      //跳转到首页
      this.props.history.push('/personal')
    }else{
      // this.$toast('密码错误');
      console.log('密码错误');
    }
  }
  render() {
    return (
      <div className="register">
        {/* <!-- logo --> */}
        <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
        {/* <!-- 表单 --> */}
        <div className="from">
          <form action="">
            <input className="inputcom" onChange={(e)=>this.change(e,'phone')} type="text" placeholder="请输入手机号"/> <br/>
            <input className="inputcom" onChange={(e)=>this.change(e,'password')} type="password" placeholder="请输入短信验证码"/>
            <div className="problems">
                <span>遇到问题 ?</span>
                <span>使用密码验证登录</span>
              </div>
              <div style={{margin:'16px 16px 0px 16px'}}>
                <button type="button" onClick={this.onSubmit}>
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
export default index
