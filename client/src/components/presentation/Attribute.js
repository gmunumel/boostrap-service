import React, { Component } from 'react'
import styles from './styles'

class Attribute extends Component {
  

  render() {
    const style = styles.attribute

    return (
      <div style={style.container}> 
          <h2 style={style.header}>
            <a style={style.title} href="/#">
              {this.props.currentAttribute.name}
            </a>
            </h2>
          <span className="detail">Type: {this.props.currentAttribute.type}</span><br />
          <span className="detail">Parent: {this.props.currentAttribute.parent}</span>
      </div>
    )
  }
}

export default Attribute