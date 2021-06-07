import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateAttribute, Attribute } from '../presentation'
import actions from '../../actions'
import styles from './styles'

class Attributes extends Component {
  constructor() {
    super()
    this.state = {
      selected: 0
    }
  }

  componentDidMount() {
    if (this.props.attribute.all !== null)
      return

    this.props.fetchAttributes(null)
  }

  addAttribute(attribute) {
    this.props.createAttribute(attribute)
  }

  selectAttribute(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    const attributes = this.props.attribute.all || []
    const attributeList = attributes.map((attribute, i) => {
      let selected = ( i === this.state.selected )
      return (
        <div key={i}>
          <Attribute index={i} select={this.selectAttribute.bind(this)}
            isSelected={selected} currentAttribute={attribute}></Attribute>
        </div>
      )
    })

    const style = styles.attribute

    return (
      <div> 
        <h2>Attributes</h2>
        <div>
          {attributeList}
        </div>

        <div style={style.attributesBox}>
          <CreateAttribute onCreate={this.addAttribute.bind(this)}></CreateAttribute>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    attribute: state.attribute
  }
}

const dispatchToProps = (dispath) => {
  return {
    fetchAttributes: (params) => dispath(actions.fetchAttributes(params)),
    createAttribute: (attribute) => dispath(actions.createAttribute(attribute))
  }
}

export default connect(stateToProps, dispatchToProps)(Attributes)