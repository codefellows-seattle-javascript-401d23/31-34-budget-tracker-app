// THIS IS NOT FINISHED!!!!!!!!!!!!!!!!




import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/';

// this is in the UI STATE!!!!
const defaultState = {
  title:'',
};

class SectionForm extends React.Component {

  // ----------------MEMBER FUNCTIONS------------------
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  // --------------------LIFECYCLE HOOKS-------------------

  render() {

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
          <button type='submit'>
        </form>
    )
  }

};

SectionForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object, // Josh - this is used to update sections
};

export default SectionForm;