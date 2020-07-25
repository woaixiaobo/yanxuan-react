import React, { Component } from 'react'
import HomeHeader from "../../components/homeHeader/index"
import HomeContent from "../../components/homeContent/index"
class index extends Component {

  render() {
    return (
      <div>
        <HomeHeader/>
        <HomeContent/>
      </div>
    )
  }
}
export default index
