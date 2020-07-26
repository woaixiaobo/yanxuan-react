import React, { Component } from 'react'
import { SearchBar } from 'zarm';
import PubSub from "pubsub-js"
import {getSearchFirst,getSearch} from "../../config/api/index"
//引入全部的lodash
import _ from 'lodash'
import "./index.css"
export default class index extends Component {
  state = {
    value: '',
    isShow:true,
    placeholder:'请输入搜索关键词',
    searchList:[],//首次搜索数据的热门搜索
    inSearchList:[],//搜索时的数据
    debounced:null,
  };
  async componentDidMount(){
    //获取首次搜索数据
    let result = await getSearchFirst()
    // console.log(result.data.data);
    let placeholder = result.data.data.defaultKeyword.keyword
    let searchList = result.data.data;
    this.setState({
      placeholder,
      searchList,
    })
  }
  //点击取消触发的回调
  cancel=()=>{
    console.log(this.props.location.search.split("=")[1]);
    this.props.history.push(`${this.props.location.search.split("=")[1]}`)
    PubSub.publish('isResponse', true);
  }
  //值发生变化时触发的回调
  change=(value)=>{
      this.setState({
        isShow:false
      });
      if(!value){
        this.setState({
          isShow:true
        });
      }
      //防抖
      _.debounce(async(value)=>{
        let result = await getSearch(value)
        this.setState({
          inSearchList:result.data.data
        })
      },500,{
        'leading': true,
        'trailing': false
      })(value)
  }
  render() {
    const {placeholder,searchList,inSearchList} = this.state
    // console.log(searchList);
    return (
      <div className="searchContainer">
        <SearchBar
          showCancel
          value={this.state.value}
          placeholder={placeholder}
          cancelText="取消"
          onCancel={this.cancel}
          onChange={(value) => this.change(value)}
          onClear={(value) => {
            console.log('清除了 -> ', value);
            this.setState({
              value: '',
            });
          }}
        />
        {/* <!-- 初始显示区域 --> */}
        {
          this.state.isShow&&(
            <div className="searchContent">
              <div className="title">热门搜索</div>
              <ul className="content">
                {
                  searchList.hotKeywordVOList&&searchList.hotKeywordVOList.map((item,index)=>{
                    return <li key={index}>{item.keyword}</li>
                  })
                }
              </ul>
            </div>
          )
        }
        {
          !this.state.isShow&&(
            <ul className="inSearchContent">
              {
                inSearchList.map((item,index)=>{
                  return(
                    <li key={index}>
                      <span>{item}</span>
                      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp" />
                    </li>
                  )
                })
              }
              
            </ul>
          )
        }
      </div>
    )
  }
}
