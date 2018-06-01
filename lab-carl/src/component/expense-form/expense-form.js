import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/utils';

const emptyState = { 
  name: '', 
  price: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.setState(this.props.expense ? this.state : emptyState);
    return this.props.onComplete({
      ...this.state,
      categoryId,
    });
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update' : 'Create Expense';

    return (
      <form 
      className='expense-form'
      onSubmit={this.handleSubmit}
      >
        <input 
          type='text'
          name='name'
          placeholder='Expense'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='number'
          name='price'
          placeholder='Price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  catgory: PropTypes.object,
  expense: PropTypes.object,
}