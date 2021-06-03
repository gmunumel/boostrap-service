import React, { Component } from 'react'
import Value from '../presentation/Value'
import styles from './styles'

class Values extends Component {
  constructor() {
    super()
    this.state = {
      value: {
        name: '',
        value: '',
        parent: ''
      },
      list: [
        
      ]
    }
  }

  updateValue(event) {
    let updatedValue = Object.assign({}, this.state.value)
    updatedValue[event.target.id] = event.target.value

    this.setState({
      value: updatedValue
    })
  }

  submitValue() {
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.value)

    this.setState({
      list: updatedList
    })
  }

  render() {
    const valueList = this.state.list.map((value, i) => {
      return (
        <li key={i}><Value currentValue={value}></Value></li>
      )
    })

    const style = styles.value

    return (
      <div style={style.container}>
        <h2>Value: Attribute 1</h2>
        <div style={style.valuesBox}>
          <ul style={style.valuesList}>
            {valueList}
          </ul>

          <input id="name" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Name" /><br />
          <input id="value" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Value" /><br />
          <input id="parent" onChange={this.updateValue.bind(this)} className="form-control" 
            type="text" placeholder="Parent" /><br />
          <button className="btn btn-info" onClick={this.submitValue.bind(this)}>
            Submit Value
          </button>
        </div>
      </div>
    )
  }
}

export default Values