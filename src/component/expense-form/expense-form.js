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
    // this.setState({ name: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = // TODO: category is missing in props validation
      this.props.category ? this.props.category.id : this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

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
  section: PropTypes.object,
  expense: PropTypes.object,
};
