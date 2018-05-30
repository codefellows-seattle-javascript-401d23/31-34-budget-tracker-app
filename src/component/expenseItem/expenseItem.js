import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from './../expenseForm/expenseForm';
import * as expenseActions from '../../action/expense';

class Expense extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
    <div className='expense'>
      <p> { expense.content } </p>
      <button onClick={() => expenseDestroy(expense)}>Delete</button>
      <ExpenseForm
        expense={expense}
        onComplete={expenseUpdate}
      />
    </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  expenseDestroy: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseActions.removeAction(data)),
  expenseUpdate: data => dispatch(expenseActions.updateAction(data)),
});

export default connect(null, mapDispatchToProps)(Expense);
