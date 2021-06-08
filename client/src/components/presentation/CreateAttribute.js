import React, { Component } from 'react'

class CreateAttribute extends Component {
  constructor() {
    super()
    this.state = {
      attribute: {
        name: '',
        type: '',
        value: '',
        parentId: ''
      },
      list: [ ]
    }
  }

  updateAttribute(event, field) {
    let updatedAttribute = Object.assign({}, this.state.attribute)
    updatedAttribute[field] = event.target.value

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
        value: '',
        parentId: ''
      }
    })
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.updateAttribute(event, 'name')} className="form-control" 
            type="text" placeholder="Name" value={this.state.attribute.name} /><br />
          <input onChange={(event) => this.updateAttribute(event, 'type')} className="form-control" 
            type="text" placeholder="Type" value={this.state.attribute.type} /><br />
          <input onChange={(event) => this.updateAttribute(event, 'value')} className="form-control" 
            type="text" placeholder="Value" value={this.state.attribute.value} /><br />
          <input onChange={(event) => this.updateAttribute(event, 'parentId')} className="form-control" 
            type="text" placeholder="Parent" value={this.state.attribute.parentId} /><br />
          <button className="btn btn-danger" onClick={(event) => this.addAttribute(event)}>
            Add Attribute
          </button>
      </div>
    )
  }
}

export default CreateAttribute