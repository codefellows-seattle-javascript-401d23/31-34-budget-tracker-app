import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../categoryForm/categoryForm';
import * as categoryActions from '../../action/category';
import ExpenseForm from './../expenseForm/expenseForm';
import ExpenseItem from '../expenseItem/expenseItem';
import * as expenseActions from '../../action/expense';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryDestroy,
      categoryUpdate,
      expenses,
      expenseCreate,
    } = this.props;

    const categoryExpenses = expenses[category.id];
    return (
      <div className='category' key={key}>
        <h1> { category.title } : ${ category.budget }</h1>
        <button onClick={() => categoryDestroy(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <div className="expenseList">
          { categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />) }
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
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
