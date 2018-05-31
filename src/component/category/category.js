import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import ExpenseForm from './../expense-form/expense-form';
import Expense from './../expense/expense';
import * as expenseActions from '../../action/expense';

class Category extends React.Component {
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
        <h1> { category.name }</h1>
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
