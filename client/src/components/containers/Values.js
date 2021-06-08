import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateAttribute, Attribute } from '../presentation'
import actions from '../../actions'
import styles from './styles'

class Values extends Component {
 
  addAttribute(attribute) {
    this.props.createAttribute(attribute)
  }

  render() {
    const values = this.props.value.all || []
    var valueList = values.map((value, i) => {
      return (
        <div key={i}><Attribute currentAttribute={value}></Attribute></div>
      )
    })

    if (values.length === 0) {
      valueList = <div>Value: {this.props.value.value}</div>
    }

    const style = styles.value

    return (
      <div style={style.container}>
        <h2>Value(s) for: {this.props.value.name}</h2>
        <div style={style.valuesBox}>
          <div>
            {valueList}
          </div>
          <br />
          <CreateAttribute onCreate={(event) => this.addAttribute(event)}></CreateAttribute>
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
    createAttribute: (attribute) => dispath(actions.createAttribute(attribute))
  }
}

export default connect(stateToProps, dispatchToProps)(Values)