import React, { Component } from 'react'
import "./index.css"
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom"
@withRouter
class index extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    background:PropTypes.string,
  }
  static defaultProps = {
    background:'#fff'
  }
   //回到主页
  toHome=()=>{
    this.props.history.push('/home')
    // this.$bus.$emit('isPersonal',true)
  }
  //去搜索
  toSearch=()=>{
    //当前页面路径
    let now = this.props.match.path.split('/')[1]
    // this.$bus.$emit('isPersonal',false)
    this.props.history.push(`/search?perRoute=${now}`)
  }
  //去购物车
  toCarShop=()=>{
    this.props.history.push('/carShop')
    // this.$bus.$emit('isPersonal',true)
  }

  render() {
    const {title,background} = this.props
    // console.log(title,background);
    return (
      <div className="buyHeader" style={{backgroundColor:background}}>
        <span className="homeIcon" onClick={this.toHome}></span>
        <span className="text">{title}</span>
        <div className="twoIcon">
          <span onClick={this.toSearch}></span>
          <span onClick={this.toCarShop}></span>
        </div>
      </div>
    )
  }
}
export default index
