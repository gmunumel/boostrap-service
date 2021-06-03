import React, { Component } from 'react'
import Attributes from '../containers/Attributes'
import Values from '../containers/Values'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Attributes></Attributes>
          </div>
          <div className="col-md-8">
            <Values></Values>
          </div>
        </div>
      </div>
    )
  }
}

export default Home