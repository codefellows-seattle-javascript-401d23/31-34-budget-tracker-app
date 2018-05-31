import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionForm from '../section-form/section-form';
import * as sectionActions from '../../action/section';

import ExpenseForm from './../expense-form/expense-form';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expense';

class Section extends React.Component {
  render() {
    const {
      expenses,
      expenseCreate,
      section,
      key,
      sectionRemove,
      sectionUpdate,
    } = this.props;

    const sectionExpenses = expenses[section.id];
    return (
      <div className='section' key={key}>
        <h1> { section.name } : { section.budget } </h1>
        <button onClick={() => sectionRemove(section)}> Delete </button>
        <SectionForm section={section} onComplete={sectionUpdate}/>
        <ExpenseForm section={section} onComplete={expenseCreate} />
        <div className="expense-list">
          { sectionExpenses.map(expense => <Expense expense={expense} key={expense.id} />) }
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  section: PropTypes.object,
  key: PropTypes.number,
  sectionRemove: PropTypes.func,
  sectionUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
    sectionRemove: data => dispatch(sectionActions.remove(data)),
    sectionUpdate: data => dispatch(sectionActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);

