import React, { Component } from 'react'
import styles from './styles'

class Value extends Component {

  render() {
    const style = styles.value

    return (
      <div>
        <p style={style.header}>
          {this.props.currentValue.name}
        </p>
        <span style={style.value}>Value: {this.props.currentValue.value}</span>
        <span style={style.divider}>|</span>
        <span style={style.value}>Parent: {this.props.currentValue.parent}</span>
        <hr />
      </div>
    )
  }
}

export default Value