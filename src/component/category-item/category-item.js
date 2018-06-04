import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import * as categoryActions from '../../action/category';
import * as expenseActions from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    const {
      expenses,
      expenseCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];
    return (
      <div className='category' key={key}>
        <h2> { category.name } </h2> 
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate} />
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <div className='expense-list'>
          {categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)}
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  key: PropTypes.number,
  expenseCreate: PropTypes.func,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
