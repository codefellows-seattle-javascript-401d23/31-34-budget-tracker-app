'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

// Zachary - this is UI state.  Everything (but the store) is UI state from now on.
const defaultState = {
  title: '',
};


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }
  //-------------------------------------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------------------------------------
  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }
  //-------------------------------------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------------------------------------
  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
    <form
      onSubmit={this.handleSubmit}
      className='category-form'>

      <input
        type='text'
        name='title'
        placeholder='Title'
        value={this.state.title}
        onChange={this.handleChange}
      />  
    <button type='submit'>{buttonText} Category</button>

  </form>
    );
  }
}
CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object, // Zachary - used to update categorys
};

// Zachary - you could bind your form to state here

export default CategoryForm;
