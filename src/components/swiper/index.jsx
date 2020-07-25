import React, { Component } from 'react'
//停入移动端ui库
import { Carousel  } from 'zarm';
import 'zarm/dist/zarm.min.css';
import "./index.css"
const swiperImages = [
  'https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/e4b5ab7f6bb4b286b9fe18e42bb1f731.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/8104acf1cc1514a88ea0b7d030e9a55e.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/99873ee03dbfa1fec94f273025baaf20.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/7e01b30c2c440e118cf09e14c7a69266.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/d842ce2015b95a2eeee319b438b14dbd.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
  'https://yanxuan.nosdn.127.net/50bc9d8901b05f7917156584812a853f.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
]
const contentRender = () => {
  return swiperImages.map((item, i) => {
    return (
      <div className="carousel__item__pic custom-indicator" key={+i}>
        <img src={item} alt="" draggable={false} />
      </div>
    );
  });
}
export default class index extends Component {
  render() {
    return (
      <Carousel
      autoPlay
      loop
      className="my-swipe"
        onChange={(index) => {
          console.log(`onChange: ${index}`);
        }}
      >
        {contentRender()}
      </Carousel>
    )
  }
}
