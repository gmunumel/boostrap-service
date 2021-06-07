import React, { Component } from 'react'
import styles from './styles'

class Attribute extends Component {
  
  onSelectTitle(event) {
    event.preventDefault()
    this.props.select(this.props.index)
  }

  render() {
    const style = styles.attribute
    const title = (this.props.isSelected) 
      ? <a style={style.title} href="/#">
          {this.props.currentAttribute.name}
        </a> 
      : <a href="/#">
          {this.props.currentAttribute.name}
        </a> 

    return (
      <div style={style.container}> 
          <h2 style={style.header} onClick={this.onSelectTitle.bind(this)}>
            {title}
          </h2>
          <span className="detail">Type: {this.props.currentAttribute.type}</span><br />
          <span className="detail">Parent: {this.props.currentAttribute.parent}</span>
      </div>
    )
  }
}

export default Attribute