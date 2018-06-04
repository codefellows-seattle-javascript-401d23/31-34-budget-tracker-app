import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

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
    const { value } = event.target;
    this.setState({ name: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit}className='category-form'>
        <input 
          type='text'
          name='name'
          placeholder='Category'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Category</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;
