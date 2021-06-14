import React, { Component } from 'react'
import styles from './styles'

class Attribute extends Component {
  
  onSelectTitle = (event) => {
    event.preventDefault()
    this.props.select(this.props.index, this.props.currentAttribute)
  }

  removeAttribute = (event) => {
    this.props.onRemove(event.target.value)
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
          <h2 style={style.header} onClick={this.onSelectTitle}>
            {title}
          </h2>
          <span className="detail">Id: {this.props.currentAttribute._id}</span><br />
          <span className="detail">Type: {this.props.currentAttribute.type}</span><br />
          <span className="detail">Value: {this.props.currentAttribute.value}</span><br />
          <span className="detail">Parent Id: {this.props.currentAttribute.parentId}</span>

          <br/>
          <button className="btn btn-danger" onClick={this.removeAttribute} 
            value={this.props.currentAttribute._id}>
            Delete
          </button>
      </div>
    )
  }
}

export default Attribute