import React, { Component } from 'react'
import {getWaterArgin} from "../../config/api/index"
import "./index.css"
export default class index extends Component {
  state = {
    WaterNum:1,//触底瀑布的次数
    WaterFish:[],//处理完成的数组，包含topics和look
    scrollFlage:true,//是否触发了瀑布流
  }
  componentDidMount(){
    const {WaterNum} = this.state
    this.initWaterFall()
    window.addEventListener('scroll',()=>{
      // console.log(documen);
      let srcollHeight = document.documentElement.offsetHeight;//页面的高度
      let innerHeight = window.innerHeight//视口的高度
      let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
      if(scrollTop===srcollHeight-innerHeight){//当滑动到底部时
          this.initWaterFall(WaterNum,5)
          console.log(scrollTop,window.innerHeight,srcollHeight.offsetHeight);
      }
  
    })
  }
  //初始化请求数据
  async initWaterFall(page=1,size=5){
    let result = await getWaterArgin({page,size});
    // console.log(result.data.data.result);
    //得到的数组
    let arr = result.data.data.result
    //定义一个数组容器
    let data = arr.map(item=>{
      let look = item.look;
      let topics = item.topics;
      let arr = []
      return arr.concat(topics,look)
    })
    // let {WaterFish} = this
    let finsh=data.flat()
    const {WaterFish,WaterNum} = this.state
    // console.log(this.WaterFish.concat(finsh,this.WaterFish));   
    let water = WaterFish.concat(finsh,WaterFish)
    this.setState({
      WaterFish:water,
      WaterNum:WaterNum+1,
    })
  }
  //元素的滑动事件
  scroll=(e)=>{
    console.log(e);
    console.log(1);
  }
  //瀑布结构
  waterfall=()=>{
    const {WaterFish} = this.state
    if(WaterFish.length>5){
      return WaterFish.map((item,index)=>{
        if(!item) return
        return (
          <div className="cell-item" key={index}>
            <img src={item.picUrl} className={item.layoutType===2?'active':''}/> 
            <div className="item-body">
            <div className="item-desc">{item.title}</div>
            <div className="item-footer">
                <div className="left">
                  <div className="avatar" style={{backgroundImage : `url(${item.avatar})` }}></div>
                  <div className="name">{item.nickname}</div>
                  <div className="read">
                    <img src="data:image/png;base64,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" />
                    <span>{item.readCount}</span>
                  </div>
                </div>
                <div className="like" style={{display:`${item.buyNow?'block':'none'}`}}>
                    <span>{item.buyNow&&item.buyNow.itemName}</span>
                    <span>去购买
                      <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF
                        FmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0w
                        TXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRh
                        LyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2
                        LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3Jn
                        LzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0i
                        IiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRw
                        Oi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMu
                        YWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNv
                        bS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9z
                        VHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0Mg
                        KE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTAzLTA2VDE2OjA0OjM2KzA4OjAwIiB4
                        bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgeG1wOk1ldGFkYXRhRGF0
                        ZT0iMjAxOS0wNC0yM1QxMDo1MDoyOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rv
                        c2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIu
                        MSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1
                        ODE0MTcwMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2VkYjEtMTJlMy00ZDlhLWFi
                        N2YtYWExNTgxNDE3MDIxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTBkN2Vk
                        YjEtMTJlMy00ZDlhLWFiN2YtYWExNTgxNDE3MDIxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2Vx
                        PiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlp
                        ZDoxMGQ3ZWRiMS0xMmUzLTRkOWEtYWI3Zi1hYTE1ODE0MTcwMjEiIHN0RXZ0OndoZW49IjIwMTkt
                        MDMtMDZUMTY6MDQ6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hv
                        cCBDQyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVz
                        Y3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5r+vIf
                        AAAAq0lEQVQokY3QsWoCQRAG4O+2TSFod4LgFmnFRxCSB0iXdxTfQPEBLNKK4HYXUqUNSXMW5kTw
                        3HWqKb75Z5jqWE+XGOA9NunbnQqY4BXrNI7DHHzDAfMcDrFJn1iUcIBHcOiaEg7XUzlctW17c3ga
                        xxpbPOMDL72wB29DrzrXL37++6d7q0fYYIY9FjeJfSg26Ss8grh6Tw5dYAlBdaynRdQlrkqog3/Y
                        5RCcAMqEXmta9JloAAAAAElFTkSuQmCC" />
                      </span> 
                </div>
              </div>
          </div>
        </div>
        )
      })
    }
  }
  render() {
    // const {WaterFish} = this.state
    // console.log(WaterFish.length>0&&WaterFish[0].picUrl);
    return (
      <div className="water-content" id="water-content" onScroll={this.scroll}>
        {
          this.waterfall()
        }
        
      </div>
    )
  }
}
