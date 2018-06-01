import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

const defaultState = {
  content: '',
  cost: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    return (
        <form className='expense-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='content'
            placeholder='Expense Name'
            value={this.state.content}
            onChange={this.handleChange}
            />
          <input
            type='number'
            name='cost'
            step='.01'
            min='0'
            placeholder='Cost $'
            value={this.state.cost}
            onChange={this.handleChange}
            />
          <button type='submit'> {buttonText} </button>
        </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
