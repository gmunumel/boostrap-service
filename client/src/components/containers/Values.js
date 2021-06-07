import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateValue, Value } from '../presentation'
import actions from '../../actions'
import styles from './styles'

class Values extends Component {
  constructor() {
    super()
    this.state = {
      list: [ ]
    }
  }

  componentDidMount() {
    // APIManager.handleGet('http://localhost:9000/api/value', null, (err, response) => {
    //   if (err) {
    //     alert('ERROR: ' + err.message)
    //     return
    //   }

    //   this.setState({
    //     list: response.results
    //   })
    // })

    if (this.props.value.all !== null)
      return

    this.props.fetchValues(null)
  }

  updateValue(event) {
    // TODO
    let updatedValue = Object.assign({}, this.state.value)
    updatedValue[event.target.id] = event.target.value

    this.setState({
      value: updatedValue
    })
  }

  addValue(value) {
    // let updatedValue = Object.assign({}, value)
    // APIManager.handlePost('http://localhost:9000/api/value', updatedValue, (err, response) => {
    //   if (err) {
    //     alert('ERROR: ' + err.message)
    //     return
    //   }

    //   let updatedList = Object.assign([], this.state.list)
    //   updatedList.push(response.result)
    //   this.setState({
    //     list: updatedList
    //   })
    // })
    this.props.createValue(value)
  }

  render() {
    const values = this.props.value.all || []
    const valueList = values.map((value, i) => {
      return (
        <li key={i}><Value currentValue={value}></Value></li>
      )
    })

    const style = styles.value

    return (
      <div style={style.container}>
        <h2>Value(s) for: Attribute 1</h2>
        <div style={style.valuesBox}>
          <ul style={style.valuesList}>
            {valueList}
          </ul> 

          <CreateValue onCreate={this.addValue.bind(this)}></CreateValue>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    value: state.value
  }
}

const dispatchToProps = (dispath) => {
  return {
    fetchValues: (params) => dispath(actions.fetchValues(params)),
    createValue: (value) => dispath(actions.createValue(value))
  }
}

export default connect(stateToProps, dispatchToProps)(Values)