import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    return (
      <div className='expense-item'>
        <h5>{ expense.name }</h5>
        <button onClick={() => expenseDestroy(expense)}> remove </button>
        <ExpenseForm expense={ expense } onComplete={ expenseUpdate }/>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseDestroy: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseDestroy: data => dispatch(expenseActions.destroy(data)),
  expenseUpdate: data => dispatch(expenseActions.update(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);
