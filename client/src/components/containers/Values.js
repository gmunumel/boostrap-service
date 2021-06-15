import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CreateAttribute, Attribute} from '../presentation';
import actions from '../../actions';
import styles from './styles';

class Values extends Component {
  addAttribute = (attribute) => {
    this.props.createAttribute(attribute);
  };

  removeAttribute = (attributeId) => {
    this.props.deleteAttribute(attributeId);
  };

  updateAttribute = (attribute) => {
    this.props.updateAttributeValues(attribute);
  };

  render() {
    const values = this.props.value.all || [];
    let valueList = values.map((value, i) => {
      return (
        <div key={i}>
          <Attribute
            currentAttribute={value}
            onRemove={this.removeAttribute}
            onUpdate={this.updateAttribute}
          ></Attribute>
        </div>
      );
    });

    if (values.length === 0) {
      valueList = <div>Value: {this.props.value.value}</div>;
    }

    const style = styles.value;

    return (
      <div style={style.container}>
        <h2>Value(s) for: {this.props.value.name}</h2>
        <div style={style.valuesBox}>
          <div>{valueList}</div>
          <br />
          <CreateAttribute
            onCreate={this.addAttribute}
            parentId={this.props.value._id}
          ></CreateAttribute>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    value: state.value,
  };
};

const dispatchToProps = (dispath) => {
  return {
    createAttribute: (attribute) => dispath(actions.createAttribute(attribute)),
    deleteAttribute: (attributeId) =>
      dispath(actions.deleteAttribute(attributeId)),
    updateAttributeValues: (attribute) =>
      dispath(actions.updateAttributeValues(attribute)),
  };
};

export default connect(stateToProps, dispatchToProps)(Values);
