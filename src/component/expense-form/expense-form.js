import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

//
const defaultState = { name: '', price: '' };

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleChange2(event) {
    this.setState({ price: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

    return (
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}>
        <br/> <br/>
      <input
        type="text"
        name="name"
        placeholder="name of expense"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange2}
        />
        <button type="submit"> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
