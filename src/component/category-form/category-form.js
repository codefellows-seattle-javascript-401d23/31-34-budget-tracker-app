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
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
        <form
          onSubmit={this.handleSubmit}
          className='category-form'>

          <input
            name='name'
            type='text'
            placeholder='Category Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name='budget'
            type='text'
            placeholder='budget type'
            value={this.state.budget}
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
