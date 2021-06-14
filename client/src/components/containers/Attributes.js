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
    if (this.props.attribute.all !== null) {
      return
    }

    this.props.fetchAttributes(null)
  }

  addAttribute = (attribute) => {
    this.props.createAttribute(attribute)
  }

  removeAttribute = (attributeId) => {
    this.props.deleteAttribute(attributeId)
  }

  selectAttribute = (index, attribute) => {
    this.setState({
      selected: index
    })
    this.props.setAttributeParams(attribute)
    this.props.fetchAttributesBy({ parentId: attribute._id })
  }

  render() {
    const attributes = this.props.attribute.all || []
    const attributeList = attributes.map((attribute, i) => {
      let selected = ( i === this.state.selected )
      return (
        <div key={i}>
          <Attribute index={i} select={this.selectAttribute}
            isSelected={selected} currentAttribute={attribute}
            onRemove={this.removeAttribute}>
          </Attribute>
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
          <CreateAttribute onCreate={this.addAttribute}></CreateAttribute>
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
    createAttribute: (attribute) => dispath(actions.createAttribute(attribute)),
    setAttributeParams: (params) => dispath(actions.setAttributeParams(params)),
    fetchAttributesBy: (parentId) => dispath(actions.fetchAttributesBy(parentId)),
    deleteAttribute: (attributeId) => dispath(actions.deleteAttribute(attributeId)),
  }
}

export default connect(stateToProps, dispatchToProps)(Attributes)