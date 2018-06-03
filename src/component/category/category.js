import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

import ExpenseForm from './../expense-form/expense-form';
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
    console.log(category, 'category budget');

    return (
      <div className='category' key={key}>
        <h1>{ category.name } </h1>
        <p>You just added the following category: { category.name }</p>
        <p>You just added the following budget type: { category.budget }</p>
        <button onClick={() => categoryDestroy(category)}> Delete {category.name } </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <p>Add an expense to your category below:</p>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <div className="expense-list">
          { categoryExpenses.map(expense => <Expense expense={expense} key={expense.id} />) }
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
  expenses: state.expense,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
