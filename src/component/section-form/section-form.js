'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

// Zachary - this is UI state.  Everything (but the store) is UI state from now on.
const defaultState = {
  title: '',
};


class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
    autoBind.call(this, SectionForm);
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
    this.setState(defaultState);
  }
  //-------------------------------------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------------------------------------

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.section) {
      // Zachary - it's like this.setState is happening
      return nextProps.section;
    }
    return {};
  }
  render() {
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
    <form
      onSubmit={this.handleSubmit}
      className='section-form'>

      <input
        type='text'
        name='title'
        placeholder='Title'
        value={this.state.title}
        onChange={this.handleChange}
      />  
    <button type='submit'>{buttonText} Section</button>

  </form>
    );
  }
}
SectionForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object, // Zachary - used to update sections
};

// Zachary - you could bind your form to state here

export default SectionForm;
