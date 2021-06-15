import React, {Component} from 'react';
import {UpdateAttribute} from '.';
import styles from './styles';

class Attribute extends Component {
  constructor() {
    super();
    this.state = {
      isEdited: false,
    };
  }

  onSelectTitle = (event) => {
    event.preventDefault();
    this.props.select(this.props.index, this.props.currentAttribute);
  };

  removeAttribute = (event) => {
    this.props.onRemove(event.target.value);
  };

  onEdit = (value) => {
    this.setState({
      isEdited: value,
    });
  };

  onUpdate = (attribute) => {
    this.props.onUpdate(attribute);
  };

  render() {
    const style = styles.attribute;
    const title = this.props.isSelected ? (
      <a style={style.title} href="/#">
        {this.props.currentAttribute.name}
      </a>
    ) : (
      <a href="/#">{this.props.currentAttribute.name}</a>
    );
    let styleEditForm = 'detail ';
    styleEditForm = this.state.isEdited ?
      styleEditForm + 'd-none' :
      styleEditForm + 'd-inline';
    return (
      <div style={style.container}>
        <h2 style={style.header} onClick={this.onSelectTitle}>
          {title}
        </h2>

        <span className="detail">
          Id: {this.props.currentAttribute._id}
          <br />
        </span>
        <span className={styleEditForm}>
          Type: {this.props.currentAttribute.type}
          <br />
        </span>
        <span className={styleEditForm}>
          Value:
          {this.props.currentAttribute.value}
          <br />
        </span>
        <span className={styleEditForm}>
          Parent Id:
          {this.props.currentAttribute.parentId}
          <br />
          <br />
        </span>

        <UpdateAttribute
          onEdit={this.onEdit}
          currentAttribute={this.props.currentAttribute}
          onUpdate={this.onUpdate}
        ></UpdateAttribute>

        <button
          className="btn btn-danger float-right"
          onClick={this.removeAttribute}
          value={this.props.currentAttribute._id}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Attribute;
