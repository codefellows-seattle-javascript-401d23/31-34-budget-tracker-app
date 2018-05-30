import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  name: '',
  budget: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ name: value });
    this.setState({ budget: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  // Lifecycle hooks...

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
        <form
          onSubmit={this.handleSubmit}
          className='section-form'>

          <input
            type='text'
            name='name'
            placeholder='Category Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type='submit'>{buttonText} Category</button>

        </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;
