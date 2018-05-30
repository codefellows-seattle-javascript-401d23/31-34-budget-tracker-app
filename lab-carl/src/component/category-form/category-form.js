import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';

const defaultState = {
  name: '',
  budget: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleNameChange(event) {
    const { value } = event.target;
    this.setState({ name: value });
  }

  handleBudgetChange(event) {
    const { value } = event.target;
    this.setState({ budget: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create Category';
    return (
      <div>
        <form onSubmit={this.handleSubmit}
        className='category-form'>
          <input
          type='text'
          name='name'
          placeholder='Category Name'
          value={this.state.name}
          onChange={this.handleNameChange}
          />

          <input
          type='number'
          name='budget'
          placeholder='Category Budget'
          value={this.state.budget}
          onChange={this.handleBudgetChange}
          />
          <button type='submit'>{buttonText}</button>
        </form>
      </div>
    )
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;