import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeHeader from "../../components/homeHeader/index"
import {mutationssAsync} from "../../redux/actions/actions"
class index extends Component {
  componentDidMount(){
    this.props.mutationssAsync([1,2,3]);
  }
  render() {
    return (
      <div>
        <HomeHeader/>
      </div>
    )
  }
}
export default connect(state=>({home:state.home}),{mutationssAsync})(index)
