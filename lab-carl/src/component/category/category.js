import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import Modal from '../modal/modal';
import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expense';

class Category extends React.Component {
  render() {
    const {
      expenses,
      expenseCreate,
      category,
      key,
      categoryDestroy,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    const showModal = () => categoryUpdate({...category, editing: true});

    const hideModal = () => categoryUpdate({...category, editing: false});

    const updateAndClose = (updatedCategory) => {
      categoryUpdate({...updatedCategory, editing: false });
    }


    return (
      <div className='category' key={key}>
        <h3> Category: <strong>{category.name}</strong> | Budget: <strong>${category.budget}</strong></h3>
        {/* <div className='item-display'> */}
          <button onClick={showModal}>Update <strong>{category.name}</strong></button>
          <Modal show={category.editing} handleClose={hideModal}>
            <CategoryForm category={category} onComplete={categoryUpdate}/>
            <button className='delete-button' onClick={() => categoryDestroy(category)}> Delete </button>
          </Modal>
        {/* </div> */}
        <hr/>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <div className='expense-list'>
          
          { 
            categoryExpenses.length > 0
            ? 
            categoryExpenses.map(expense => <Expense expense={expense} key={expense.id} />) 
            :
            <p>Expenses will show here for the above category</p>
          }
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.create(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
