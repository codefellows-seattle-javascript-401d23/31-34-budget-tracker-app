import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const emptyState = {
  name: '',
  price: 0,
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    
    autoBind.call(this, ExpenseForm);
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
    this.setState(emptyState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
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
        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};

export default ExpenseForm;
