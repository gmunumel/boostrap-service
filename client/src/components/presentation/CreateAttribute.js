import React, { Component } from 'react'

class CreateAttribute extends Component {
  constructor() {
    super()
    this.state = {
      attribute: {
        name: '',
        type: '',
        parent: ''
      },
      list: [ ]
    }
  }

  updateAttribute(event) {
    let updatedAttribute = Object.assign({}, this.state.attribute)

    if (event.target.id === 'attrName') {
      updatedAttribute['name'] = event.target.value
    } else if (event.target.id === 'attrParent') {
      updatedAttribute['parent'] = event.target.value
    } else {
      updatedAttribute[event.target.id] = event.target.value
    }

    this.setState({
      attribute: updatedAttribute,
    })
  }

  addAttribute() {
    this.props.onCreate(this.state.attribute)
    this.setState({
      attribute: {
        name: '',
        type: '',
        parent: ''
      }
    })
  }

  render() {
    return (
      <div>
        <input id="attrName" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Name" value={this.state.attribute.name} /><br />
          <input id="type" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Type" value={this.state.attribute.type} /><br />
          <input id="attrParent" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Parent" value={this.state.attribute.parent} /><br />
          <button className="btn btn-danger" onClick={this.addAttribute.bind(this)}>
            Add Attribute
          </button>
      </div>
    )
  }
}

export default CreateAttribute