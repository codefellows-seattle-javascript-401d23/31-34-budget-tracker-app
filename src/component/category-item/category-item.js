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
    const categoryExpenses = expenses[category.id];
    const showModal = () => categoryUpdate({ ...category, editing: true });
    const hideModal = () => categoryUpdate({ ...category, editing: false });
    return (
      <div className='category-item'>
        <button onClick={() => categoryDestroy(category)}> remove </button>
        <button onClick={showModal}> update </button>
        <h4>{category.name.toUpperCase()}</h4>
        <p>Budget allotted: ${category.budget}</p>
        { category.description && <p><em>{category.description}</em></p> }
        <Modal show={category.editing} handleClose={hideModal}>
          <CategoryForm onComplete={categoryUpdate} category={category}/>
        </Modal>
        <ExpenseForm category={ category } onComplete={ expenseCreate }/>
        <div className='expense-list'>
          {
            categoryExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)
          }
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
