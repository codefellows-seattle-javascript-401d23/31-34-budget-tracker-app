import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import ExpenseForm from './../expense-form/expense-form';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expense';
import autoBind from "../../utils";

class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    autoBind.call(this, Category);
  }

  handleShowButton = () => {
    this.state.show ? this.setState({show: false}) : this.setState({show: true});
  };

  render() {
    const {
      expenses,
      expenseCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id]; // eslint-disable-line

    return (
        <div className='category' key={key}>
          <h1>
            { category.title }
          </h1>
          <button onClick={() => categoryRemove(category) }> Delete </button>
          <br/>
          <br/>
          <CategoryForm category={category} onComplete={categoryUpdate}
            updateCategory={this.state.show}/>
          <button onClick={ this.handleShowButton }> edit </button>
          <ExpenseForm category={category} expense={expenses} onComplete={expenseCreate} />
          <div className='expense-list'>
            { expenses[category.id].map(expense => <Expense expense={expense} key={expense.id} />) }
          </div>
        </div>
    );
  }
}

Category.propTypes = {
  // Josh - below were are connecting all of the state
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

// connect(state, connecting to the Dispatch function)(curring to make the actual connection
// component)
