import React from 'react';
import PropTypes from 'prop-types';
import autobind from '../../utils/autobind';

const emptyState = {
  name: '',
  price: '',
  description: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autobind.call(this, ExpenseForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(this.props.expense ? this.state : emptyState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'update expense' : 'create expense';
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='expense name'
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
          required
        />
        <textarea
          name='description'
          placeholder='description of expense'
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type='submit'>{ buttonText }</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  onComplete: PropTypes.func,
};
