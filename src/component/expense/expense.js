import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class Expense extends React.Component {
  render() {
    const { expense, expenseRemove, expenseUpdate } = this.props;
    return (
      <div className = 'expense'>
        <h2> { expense.name }: ${ expense.price } </h2>
        <button onClick = { () => expenseRemove(expense) }> Delete </button>
        <ExpenseForm
          expense = { expense }
          onComplete = { expenseUpdate }
        />
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
  expenseRemove: data => dispatch(expenseActions.remove(data)),
  expenseUpdate: data => dispatch(expenseActions.update(data)),
});

export default connect(null, mapDispatchToProps)(Expense);
