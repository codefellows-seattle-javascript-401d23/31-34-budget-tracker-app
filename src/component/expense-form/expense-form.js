import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const emptyState = { name: '', price: '' };

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    // const { name, value } = event.target;
    // this.setState({ [name]: value });
    this.setState({ [event.target.name]: event.target.value }, () => {
      // console.log(this.state);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId =
      this.props.category ? this.props.category.id : this.state.categoryId;
    // console.log(this.props.expense, "here")
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    // console.log(expense, "here")
    return (
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="expense name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="expense amount"
          value={this.state.price}
          onChange={this.handleChange}
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
