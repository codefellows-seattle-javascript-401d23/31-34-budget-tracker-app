import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import Expense from '../expense/expense';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    const {
      expenses,
      expenseCreate,
      category, 
      categoryDestroy, 
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];
    return (
      <div className='categoryItem' key={category.id}>
        <button className='categoryItemDelete' onClick={() => categoryDestroy(category)}>X</button>
        <div className='categoryItemDisplay'>
        <div className={'categoryBanner'}>
        <h2>{ category.name }</h2>
        <p>BUDGET TOTAL: ${ category.budget }</p>
        </div>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        </div>
        <ExpenseForm category={category} onComplete={expenseCreate}/>
        <div className='expenseList'>
          { categoryExpenses.map(expense => <Expense expense={expense} key={expense.id}/>) }
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  expense: PropTypes.object,
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
    categoryDestroy: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
