import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';
import './expense-item.scss';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseDestroy, expenseUpdate } = this.props;
    const showModal = () => expenseUpdate({ ...expense, editing: true });
    const hideModal = () => expenseUpdate({ ...expense, editing: false });
    return (
      <div className='expense-item'>
        <h5>{expense.name}</h5>
        <p>${expense.price}</p>
        <button onClick={() => expenseDestroy(expense)}> x </button>
        <button onClick={showModal}> update </button>
        {expense.description && <p><em>{ expense.description }</em></p>}
        <Modal show={expense.editing} handleClose={hideModal}>
          <ExpenseForm show={expense.editing} expense={expense} onComplete={expenseUpdate}/>
        </Modal>
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
