import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as expenseActions from '../../action/expense';
import ExpenseForm from '../expense-form/expense-form';


class Expense extends React.Component {
  render() {
    const {
      expense,
      expenseRemove,
      expenseUpdate,
    } = this.props;
    return (
      <div className='expense'>
        <h3> { expense.name }: ${expense.price}</h3>
        <button onClick={() => expenseRemove(expense)}> Delete </button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.number,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    expenseRemove: data => dispatch(expenseActions.remove(data)),
    expenseUpdate: data => dispatch(expenseActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Expense);
