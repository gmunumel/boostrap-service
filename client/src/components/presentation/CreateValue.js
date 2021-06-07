import React, { Component } from 'react'

class CreateValue extends Component {
  constructor() {
    super()
    this.state = {
      value: {
        name: '',
        value: '',
        parent: ''
      },
      list: [ ]
    }
  }

  updateValue(event) {
    let updatedValue = Object.assign({}, this.state.value)
    updatedValue[event.target.id] = event.target.value
    this.setState({
      value: updatedValue
    })
  }

  addValue() {
    this.props.onCreate(this.state.value)
    this.setState({
      value: {
        name: '',
        value: '',
        parent: ''
      }
    })
  }

  render() {
    return (
      <div>
        <input id="name" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Name" value={this.state.value.name} /><br />
          <input id="value" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Value" value={this.state.value.value} /><br />
          <input id="parent" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Parent" value={this.state.value.parent} /><br />
          <button className="btn btn-info" onClick={this.addValue.bind(this)}>
            Add Value
          </button>
      </div>
    )
  }
}

export default CreateValue