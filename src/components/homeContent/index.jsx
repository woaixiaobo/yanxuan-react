import React, { Component } from 'react';
import "./index.css"
import Swiper from "../swiper/index"
import { connect } from 'react-redux'
import {indexeAsync} from "../../redux/actions/actions"
@connect(state=>({home:state.home}),{indexeAsync})
class index extends Component {
  //初始化数据
  state = {
     time: 2 * 60 * 60 * 1000,//倒计时
  }
  //生命周期函数
  componentDidMount(){
    //获取首页数据
    this.props.indexeAsync();
  }
  render() {
    const {indexData}  = this.props.home
    // console.log(indexData);
    return (
      <div className="homeContent">
        {/* 轮播 */}
        <Swiper/>
        {/* <!-- 三个横向标题 --> */}
        <ul className="grow">
          <li>
            <i>
              <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" />
            </i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i>
              <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" />
            </i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i>
              <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" />
            </i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        {/* <!-- kingkongMouddle 图片部分 --> */}
        <ul className="kingKongModule">
          {
            indexData.kingKongModule&&indexData.kingKongModule.kingKongList.map((item,index)=>{
              return (
                <li key={index}>
                  <img src={item.picUrl}/>
                  <span>{item.text}</span>
                </li>
              )
            })
          }
        </ul>
        {/* <!-- 新人区 --> */}
        <div className="newPerson">
          <div className="top">
            {/* <!-- <img src="https://yanxuan.nosdn.127.net/d9b021de430394e9b274bf0455b53120.gif?imageView&quality=75" alt=""> --> */}
          </div>
          <div className="bottom">
            <img src="https://yanxuan.nosdn.127.net/8b5c103801f035cc7369afc1a46e0bc5.png?quality=75&type=webp&imageView&thumbnail=375x0" />
            <img src="https://yanxuan.nosdn.127.net/01fae6d1209f9904af34095feb394325.png?quality=75&type=webp&imageView&thumbnail=375x0"/>
          </div>
        </div>
        {/* <!-- 新人专享礼 --> */}
        <div className="newGift">
          <div className="title">新人专享礼</div>
          <div className="cotent">
            <div className="left">
              <p>新人专享礼包</p>
              <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" />
            </div>
            <div className="right">
              <div className="fuli">
                <div className="text">
                  <p className="fulishe">福利社</p>
                  <p className="dayPrice">今日特价</p>
                </div>
                <img src="https://yanxuan-item.nosdn.127.net/22cfd602403ca6a026a439e08e3e3127.png?quality=75&type=webp&imageView&thumbnail=200x200" />
                <div className="discount">
                  <div className="line1">￥82.8</div>
                  <div className="line2">￥88</div>
                </div>
              </div>
              <div className="xinren">
                <div className="text">
                  <p className="fulishe">新人拼团</p>
                  <p className="baoyou">1元起包邮</p>
                </div>
                <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?quality=75&type=webp&imageView&thumbnail=200x200" />
                <div className="discount">
                  <div className="line1">￥1</div>
                  <div className="line2">￥13.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 类目热销榜 --> */}
        <div className="categoryHotSellModule">
          <div className="moduleTitle">{indexData.categoryHotSellModule&&indexData.categoryHotSellModule.title}</div>
          <div className="content">
            <div className="line1">
              {
                indexData.categoryHotSellModule&&
                
                indexData.categoryHotSellModule.categoryList.slice(0,2).map((item,index)=>{
                  return (
                    <div className="bigCom" key={index}>
                      <p>{item.categoryName}</p>
                      <img src={item.picUrl}/>
                    </div>
                  )
                })
              }
            </div>
            <div className="line2" >
              {
                indexData.categoryHotSellModule&&
                indexData.categoryHotSellModule.categoryList.slice(2).map((item,index)=>{
                  return (
                    <div className="item" key={index}>
                      <p>{item.categoryName}</p>
                      <img src={item.picUrl}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/* <!-- 限时购 --> */}
        <div className="flashSaleModule">
          <div className="moduleTitle">
            <div className="left">
              <span>限时购</span>
              {/* <div className="countDown">
                <van-count-down >
                  <template v-slot="timeData">
                    <span className="block"></span>
                    <span className="colon">:</span>
                    <span className="block"></span>
                    <span className="colon">:</span>
                    <span className="block"></span>
                  </template>
                </van-count-down>
              </div> */}
            </div>
            <div className="right">
              <span>更多</span>
              <i></i>
            </div>
          </div>
          <div className="content" >
              {
                indexData.flashSaleModule&&
                indexData.flashSaleModule.itemList.map((item,index)=>{
                  return (
                    <div className="flashSaleItem" key={index}>
                      <div className="imgWrap">
                        <img src={item.picUrl}/>
                      </div>
                      <div className="price">
                        <span>￥{item.activityPrice}</span>
                        <span>￥{item.originPrice}</span>
                      </div>
                    </div>
                  )
                })
              }
              
            
          </div>
        </div>
        {/* <!-- 新品首发 --> */}
        <div className="newItemList">
          <div className="moduleTitle">
            <div className="left">
              <span>新品首发</span>
            </div>
            <div className="right">
              <span>更多</span>
              <i></i>
            </div>
          </div>
          <div className="content" >
            {
              indexData.newItemList&&
              indexData.newItemList.slice(0,6).map((item,index)=>{
                return(
                  <div className="flashSaleItem" key={index}>
                    <div className="imgWrap">
                      <img src={item.listPicUrl}/>
                    </div>
                    <div className="price">
                      <span>{item.name}</span>
                      <span>￥{item.limitedFlag}</span>
                    </div>
                  </div>
                )
              })
            }
            
            
          </div>
        </div>
        {/* <!-- 底部两个图片 --> */}
        <div className="sceneLightShoppingGuideModule">
          {
            indexData.sceneLightShoppingGuideModule&&
            indexData.sceneLightShoppingGuideModule.slice(0,2).map((item,index)=>{
              return(
                <div className="item"  key={index}>
                  <p>{item.styleItem.title}</p>
                  <p>{item.styleItem.desc}</p>
                  <div className="images">
                    <img src={item.styleItem.picUrlList[0]}/>
                    <img src={item.styleItem.picUrlList[1]}/>
                  </div>
                </div>
              )
            })
          }
          
        </div>
        {/* <!-- 底部 --> */}
        <div className="bottom">
          <div className="bd">
            <div className="left">下载APP</div>
            <div className="right">电脑版</div>
          </div>
          <p className="copyright">
            网易公司版权所有 © 1997-2020 <br/>
            食品经营许可证：JY13301080111719
          </p>
        </div>
      </div>
    );
  }
}

export default index;