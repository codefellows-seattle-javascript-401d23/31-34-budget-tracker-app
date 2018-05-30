import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/utils';

const emptyState = { 
  name: '', 
  price: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.setState(previousState => {
      return this.state = emptyState;
      // this.props.category ? this.props.category : 
      });
    // this.setState(emptyState);
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
          value={this.state.content}
          onChange={this.handleNameChange}
        />
        <input 
          type='number'
          name='price'
          placeholder='Price'
          value={this.state.content}
          onChange={this.handlePriceChange}
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