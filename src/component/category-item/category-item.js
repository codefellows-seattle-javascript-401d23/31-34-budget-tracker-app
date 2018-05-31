import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    const {
      category,
      categoryDestroy,
      categoryUpdate,
      expenses,
      expenseCreate,
    } = this.props;

    console.log(expenses);
    const categoryExpense = expenses[category.id];
    return (
      <div className = 'category' key = { category.id }>
        <h1> { category.name } </h1>
        <button onClick = {() => categoryDestroy(category)}> Destroy </button>
        <CategoryForm category = { category } onComplete = { categoryUpdate }/>
        <ExpenseForm category = { category } onComplete = { expenseCreate } />
        <div className = 'expense-list'>
          { categoryExpense.map(expense => <Expense expense = { expense } key = { expense.id } />)}
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
