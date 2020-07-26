import React, { Component } from 'react'
import { SearchBar } from 'zarm';
import PubSub from "pubsub-js"
import "./index.css"
export default class index extends Component {
  state = {
    value: '',
  };
  cancel=()=>{
    console.log(this.props.location.search.split("=")[1]);
    this.props.history.push(`${this.props.location.search.split("=")[1]}`)
    PubSub.publish('isResponse', true);

  }
  render() {
    return (
      <div className="searchContainer">
        <SearchBar
          showCancel
          value={this.state.value}
          placeholder="搜索"
          cancelText="取消"
          onCancel={this.cancel}
          onChange={(value) => {
            console.log(value);
            this.setState({
              value,
            });
          }}
          onClear={(value) => {
            console.log('清除了 -> ', value);
            this.setState({
              value: '',
            });
          }}
        />
        {/* <!-- 初始显示区域 --> */}
        <div className="searchContent">
          <div className="title">热门搜索</div>
          <ul className="content" v-if="searchList">
            <li >
              小博仔
            </li>
            <li >
              小博仔
            </li>
          </ul>
          
        </div>
      </div>
    )
  }
}
