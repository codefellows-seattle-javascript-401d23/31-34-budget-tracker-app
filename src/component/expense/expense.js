import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class Expense extends React.Component {
  render() {
    const { expense, expenseRemove, expenseUpdate } = this.props;
    return (
      <div className='expense'>
        <div className={'expenseDisplay'}>
        <div className={'expenseBanner'}>
        <p>{expense.name}</p>
        <p>${expense.price}</p>
        <button className={'expenseDelete'} onClick={() => expenseRemove(expense)}>X</button>
        </div>
        <ExpenseForm
        expense={expense}
        onComplete={expenseUpdate}
        >
        </ExpenseForm>
        </div>
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseRemove: data => dispatch(expenseActions.removeAction(data)),
  expenseUpdate: data => dispatch(expenseActions.updateAction(data)),
});

export default connect(null, mapDispatchToProps)(Expense);
