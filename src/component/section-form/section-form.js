import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

// this is in the UI STATE!!!!
const defaultState = {
  title:'',
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
    autoBind.call(this, SectionForm);
  }
  // ----------------MEMBER FUNCTIONS------------------
  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  // --------------------LIFECYCLE HOOKS-------------------

  render() {
    const buttonText = this.props.section ? 'Update' : 'Create';
    return(
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
  section: PropTypes.object, // Josh - this is used to update sections
};

export default SectionForm;