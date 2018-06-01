import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class Expense extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
      <div className='expense'>
        <h4> {expense.name}:  ${expense.price} </h4>
        <div className='item-display'>
          <ExpenseForm 
            expense={expense}
            onComplete={expenseUpdate}
          />
          <button onClick={() => expenseDestroy(expense)}> Delete </button>
        </div>
      </div>
    )
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  expenseDestroy: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseActions.destroy(data)),
  expenseUpdate: data => dispatch(expenseActions.update(data)),
});

export default connect(null, mapDispatchToProps)(Expense);
