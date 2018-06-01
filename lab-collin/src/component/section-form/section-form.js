import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/';

const defaultState = {
  name: '',
  budget: 0,
};


class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
    autoBind.call(this, SectionForm);
  }
 
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }
 
  render() {
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
      <form
        onSubmit={this.handleSubmit}
        className='section-form'>

        <input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
         <input
          type='number'
          name='budget'
          placeholder='Budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Section</button>

      </form>
    );
  }
}

SectionForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object, 
};

export default SectionForm;
