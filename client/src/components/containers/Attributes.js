import React, { Component } from 'react'
import Attribute from '../presentation/Attribute'
import styles from './styles'
import superagent from 'superagent'

class Attributes extends Component {
  constructor() {
    super()
    this.state = {
      attribute: {
        name: '',
        type: '',
        parent: ''
      },
      list: [
      ]
    }
  }

  componentDidMount() {
    superagent
      .get('http://localhost:9000/api/attribute')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          alert('ERROR: ' + err)
          return
        }

        let results = response.body.results
        this.setState({
          list: results
        })
      })
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
      attribute: updatedAttribute
    })
  }

  submitAttribute() {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.attribute)

    this.setState({
      list: updatedList
    })
  }

  render() {
    const listItems = this.state.list.map((attribute, i) => {
      return (
        <div key={i}><Attribute currentAttribute={attribute}></Attribute></div>
      )
    })

    const style = styles.attribute

    return (
      <div> 
        <h2>Attributes</h2>
        <div>
          {listItems}
        </div>

        <div style={style.attributesBox}>
          <input id="attrName" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Name" /><br />
          <input id="type" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Type" /><br />
          <input id="attrParent" onChange={this.updateAttribute.bind(this)} className="form-control" 
            type="text" placeholder="Parent" /><br />
          <button className="btn btn-danger" onClick={this.submitAttribute.bind(this)}>
            Submit Attribute
          </button>
        </div>
      </div>
    )
  }
}

export default Attributes