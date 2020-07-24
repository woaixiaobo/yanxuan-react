import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class index extends Component {
  render() {
    return (
      <div>
        <Link to="/personal">去个人中心</Link>
      </div>
    )
  }
}
