import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const defaultState = {
  name: '',
  price: 0,
  error: false,
};

class ExpenseForm extends React.Component {
  constructor(props) {  
    super(props);
    this.state = this.props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === '') {
      return this.setState({ error: true });
    }
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.setState(defaultState);
    return this.props.onComplete({ ...this.state, categoryId });
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

    return (
      <div className={'expenseForm'}>
      <form
      onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='name'
          placeholder='Expense'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}</button>
      </form>
      { this.state.error && <h2 className="error">You must enter a name for this expense item.</h2> }
      </div>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default ExpenseForm;
