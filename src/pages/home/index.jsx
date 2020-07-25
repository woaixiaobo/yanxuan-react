import React, { Component } from 'react'
import HomeHeader from "../../components/homeHeader/index"
import HomeContent from "../../components/homeContent/index"
import CateGroys from "../../components/cateGroys/index"
import PubSub from "pubsub-js"
class index extends Component {
  state = {
    isShow:true,
  }
  componentDidMount(){
    PubSub.subscribe('isShow', (msg,data)=>{
      console.log('订阅',msg);
      this.setState({
        isShow:data
      })
    })
  }
  render() {
    const {isShow} = this.state
    console.log(isShow);
    return (
      <div>
        <HomeHeader/>
        {
          isShow?<HomeContent/>:<CateGroys/>
        }
      </div>
    )
  }
}
export default index
