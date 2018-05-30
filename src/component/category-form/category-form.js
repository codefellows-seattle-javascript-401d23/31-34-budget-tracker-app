import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/autobind';

const defaultState = {
  name: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <div>
        <h1>Budget Tracking Application</h1>
        <form className = 'category-form'
          onSubmit = { this.handleSubmit }>

          <input
            type = 'text'
            name = 'name'
            placeholder = 'Name'
            value = { this.state.name }
            onChange = { this.handleChange }
          />
          <input
            type = 'number'
            name = 'budget'
            placeholder = 'Budget Amount'
            value = {this.state.budget}
            onChange = {this.handleChange}
          />
          <button type = 'submit'> { buttonText } Category </button>
        </form>
      </div>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;
