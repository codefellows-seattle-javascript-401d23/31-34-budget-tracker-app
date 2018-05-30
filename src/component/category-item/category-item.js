import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import Modal from '../modal/modal';
import * as categoryActions from '../../action/category';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import * as expenseActions from '../../action/expense';
import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const {
      category,
      categoryUpdate,
      categoryDestroy,
      expenses,
      expenseCreate,
    } = this.props;
    let budgetRemaining;
    const categoryExpenses = expenses[category.id];
    if (categoryExpenses) {
      const budgetUsed = categoryExpenses
        .map(expense => expense.price)
        .reduce((acc, curr) => Number(acc) + Number(curr), 0);
      budgetRemaining = category.budget - budgetUsed;
    }
    const showCategoryModal = () => categoryUpdate({ ...category, editing: true });
    const hideCategoryModal = () => categoryUpdate({ ...category, editing: false });
    const showExpenseForm = () => categoryUpdate({ ...category, addExp: true });
    const hideExpenseForm = () => categoryUpdate({ ...category, addExp: false });
    return (
      <div className='category-item'>
        <button onClick={() => categoryDestroy(category)}> delete </button>
        <button onClick={showCategoryModal}> update </button>
        {
          category.addExp ? <button onClick={hideExpenseForm}> done </button> :
            <button onClick={showExpenseForm}> add expenses </button>
        }
        <h4>{category.name.toUpperCase()}</h4>
        {category.description && <p><em>{category.description}</em></p>}
        <Modal show={category.editing} handleClose={hideCategoryModal}>
          <CategoryForm onComplete={categoryUpdate} category={category}/>
        </Modal>
        <ExpenseForm show={category.addExp} category={category} onComplete={expenseCreate}/>
        <div className='expense-list'>
          {
            categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)
          }
        </div>
        <div className='category-budget'>
          <p>allotted: ${category.budget}</p>
          <p>remaining: ${budgetRemaining}</p>
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    expenseCreate: data => dispatch(expenseActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
