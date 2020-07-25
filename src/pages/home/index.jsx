import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeHeader from "../../components/homeHeader/index"
@connect(state=>({
  count:state
}))
class index extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <HomeHeader/>
      </div>
    )
  }
}
export default index
