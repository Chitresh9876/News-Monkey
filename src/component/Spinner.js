import React, { Component } from 'react'
import load from './load.gif'

export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={load} alt="loading" style={{height:50}} className="my-4" />
      </div>
    )
  }
}

export default spinner
