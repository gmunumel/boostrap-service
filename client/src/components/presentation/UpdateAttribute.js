import React, {Component} from 'react';

class UpdateAttribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      attribute: {
        _id: '',
        name: '',
        type: '',
        value: '',
        parentId: '',
        ...this.props.currentAttribute,
      },
    };
  }

  updateAttribute = (event, field) => {
    const updatedAttribute = Object.assign({}, this.state.attribute);
    updatedAttribute[field] = event.target.value;

    this.setState({
      attribute: updatedAttribute,
    });
  };

  activateEdit = () => {
    this.props.onEdit(true);
    this.setState({
      isEdited: true,
    });
  };

  cancelEdit = () => {
    this.props.onEdit(false);
    this.setState({
      isEdited: false,
      attribute: {
        ...this.props.currentAttribute,
      },
    });
  };

  saveEdit = () => {
    this.props.onEdit(false);
    this.props.onUpdate(this.state.attribute);

    this.setState({
      isEdited: false,
      ...this.props.currentAttribute,
    });
  };

  render() {
    let styleEdit = 'btn btn-warning ';
    styleEdit = this.state.isEdited ?
      styleEdit + 'd-none' :
      styleEdit + 'd-inline';
    let styleSaveEdit = 'btn btn-warning ';
    styleSaveEdit = this.state.isEdited ?
      styleSaveEdit + 'd-inline' :
      styleSaveEdit + 'd-none';
    let styleCancelEdit = 'btn btn-danger ';
    styleCancelEdit = this.state.isEdited ?
      styleCancelEdit + 'd-inline' :
      styleCancelEdit + 'd-none';
    let styleEditForm = 'form-group row ';
    styleEditForm = this.state.isEdited ?
      styleEditForm + '' :
      styleEditForm + 'd-none';
    return (
      <span>
        <div className={styleEditForm}>
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              onChange={(event) => this.updateAttribute(event, 'name')}
              className="form-control"
              type="text"
              placeholder="Name"
              value={this.state.attribute.name}
            />
          </div>
        </div>
        <div className={styleEditForm}>
          <label className="col-sm-2 col-form-label">Type</label>
          <div className="col-sm-10">
            <input
              onChange={(event) => this.updateAttribute(event, 'type')}
              className="form-control"
              type="text"
              placeholder="Type"
              value={this.state.attribute.type}
            />
          </div>
        </div>
        <div className={styleEditForm}>
          <label className="col-sm-2 col-form-label">Value</label>
          <div className="col-sm-10">
            <input
              onChange={(event) => this.updateAttribute(event, 'value')}
              className="form-control"
              type="text"
              placeholder="Value"
              value={this.state.attribute.value}
            />
          </div>
        </div>
        <div className={styleEditForm}>
          <label className="col-sm-2 col-form-label">ParentId</label>
          <div className="col-sm-10">
            <input
              onChange={(event) => this.updateAttribute(event, 'parentId')}
              className="form-control"
              type="text"
              placeholder="Parent Id"
              value={this.state.attribute.parentId}
            />
            <input
              onChange={(event) => this.updateAttribute(event, '_id')}
              className="form-control"
              type="hidden"
              value={this.state.attribute._id}
            />
          </div>
        </div>

        <button className={styleEdit} onClick={this.activateEdit}>
          Edit
        </button>
        <button className={styleSaveEdit} onClick={this.saveEdit}>
          Save
        </button>
        <button className={styleCancelEdit} onClick={this.cancelEdit}>
          Cancel
        </button>
      </span>
    );
  }
}

export default UpdateAttribute;
