import React from 'react';
import PropTypes from 'prop-types';
import autobind from '../../utils/autobind';
import './category-form.scss';

const defaultState = {
  name: '',
  budget: '',
  description: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autobind.call(this, CategoryForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(this.props.category ? this.state : defaultState);
    return this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'update' : 'create';
    return (
      <form className='category-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='budget category'
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type='number'
          name='budget'
          placeholder='total budget'
          value={this.state.budget}
          onChange={this.handleChange}
          required
        />
        <input
          type='text'
          placeholder='description'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;
