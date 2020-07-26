import React, { Component } from 'react'
import "./index.css"
import {getCateGroy} from "../../config/api/index"
import PubSub from "pubsub-js"
export default class index extends Component {
  state = {
    active:"",
    cateGroys:[],//请求的数据
    cateGroy:{},//当前项的数据
  }
  async componentDidMount(){
     //获取分类数据
    let result = await getCateGroy()
    this.setState({
      cateGroys: result.data,
      active:result.data[0].name,
      cateGroy:result.data[0]
    })
  }
  //改变选中状态
  changeActive=(e)=>{
    let {cateGroys,cateGroy} = this.state
    if(e.target.nodeName==="LI"){
      //查找对应的当前项的对象数据
      cateGroy = cateGroys.find(item=>item.name===e.target.dataset.name)
      this.setState({
        active:e.target.dataset.name,
        cateGroy
      })
    }
  }
  //点击去搜索
  toSearch=()=>{
    let nowCompontent = this.props.location.pathname.split('/')[1]
    console.log(nowCompontent);
    this.props.history.push(`/search?perRoute=${nowCompontent}`)
    PubSub.publish('isResponse', false);
  }
  render() {
    const {cateGroys,active,cateGroy} = this.state
    return (
      <div className="classSearch"> 
        {/* <!-- 搜索 --> */}
        <div className="search" onClick={this.toSearch}>
          <div className="in">
            <i></i>
            <span>搜索商品, 共34101款好物</span>
          </div>
        </div>
        {/* <!-- 内容 --> */}
        <div className="content">
          <div className="left" onClick={this.changeActive}>
            <ul>
              {
                cateGroys&&cateGroys.map((item,index)=>{
                  return (
                    <li data-name={item.name} className={active===item.name?'active':''} key={index}>{item.name}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="right">
            <div className="titleImage">
              <img src={cateGroy.imgUrl}/>
            </div>
            {
              cateGroy.subCateList&&
              cateGroy.subCateList.slice(0,9).map((item,index)=>{
                return (
                  <div className="imageItem" key={index}>
                    < img src={item.wapBannerUrl}/>
                    <span>{item.frontName}</span>
                  </div>
                )
              })
            }
              
          </div>
        </div>
      </div>
    )
  }
}
