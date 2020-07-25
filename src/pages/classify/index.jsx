import React, { Component } from 'react'
import "./index.css"
import {getCateGroy} from "../../config/api/index"
export default class index extends Component {
  state = {
    active:"",
    cateGroys:[],//请求的数据
  }
  async componentDidMount(){
     //获取分类数据
    let result = await getCateGroy()
    this.setState({
      cateGroys: result.data,
      active:result.data[0].name
    })
  }
  render() {
    const {cateGroys,active} = this.state
    return (
      <div className="classSearch"> 
        {/* <!-- 搜索 --> */}
        <div className="search" >
          <div className="in">
            <i></i>
            <span>搜索商品, 共34101款好物</span>
          </div>
        </div>
        {/* <!-- 内容 --> */}
        <div className="content">
          <div className="left">
            <ul>
              {
                cateGroys&&cateGroys.map((item,index)=>{
                  return (
                    <li className={active===item.name?'active':''} key={index}>{item.name}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="right" v-if="cateGroy.subCateList">
            <div className="titleImage">
              <img />
            </div>
              <div className="imageItem">
                < img />
                <span></span>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
