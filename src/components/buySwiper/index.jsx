import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import "./index.css"
import {getWangyi} from "../../config/api/index"
export default class index extends Component {
  state = {
    swiperDate:[],//轮播数据
  }
  async componentDidMount(){
    //请求轮播数据
    let result = await getWangyi();
    this.setState({
      swiperDate:result.data.data,
    })
  }
  componentDidUpdate(){
    //轮播图初始化
    this.initSwiper();
  }
  //初始化轮播
  initSwiper(){
    let mySwiper = new Swiper('.swiper-container', {
      slidesPerView :4,
      // slidesPerGroup : 1,
      slidesPerColumn: 2,
      // spaceBetween: 0,
      slidesPerColumnFill : 'row',
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize:20
      },
    });
    //拖动条的颜色
    mySwiper.scrollbar.dragEl.style.background='red';
    // console.log(mySwiper.scrollbar.dragEl.style.background);
  }
  render() {
    const {swiperDate} = this.state
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" >
          {
            swiperDate.navList&&
            swiperDate.navList.map((item,index)=>{
              return(
                <div className="swiper-slide" key={index}>
                  <div className="slideItem">
                    <img src={item.picUrl}/>
                    <div className="texcontent">
                      <p>{item.mainTitle}</p>
                      <p>{item.viceTitle}</p>
                    </div>
                  </div> 
                </div> 
              )
            })
          }
        </div>
        {/* <!-- Add Pagination --> */}
        <div className="swiper-scrollbar"></div>
    </div>
    )
  }
}
