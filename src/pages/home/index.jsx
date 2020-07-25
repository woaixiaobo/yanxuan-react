import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeHeader from "../../components/homeHeader/index"
import {CateModulesAsync} from "../../redux/actions/actions"
class index extends Component {
  componentDidMount(){
    this.props.CateModulesAsync();
  }
  render() {
    return (
      <div>
        <HomeHeader/>
      </div>
    )
  }
}
export default connect(state=>({home:state.home}),{CateModulesAsync})(index)
