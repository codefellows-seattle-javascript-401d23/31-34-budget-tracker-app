import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const emptyState = { 
  content: '', 
  price: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update' : 'Create';

    return (
      <form className="expenseForm" onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="content"
        placeholder="expense"
        value={this.state.content}
        onChange={this.handleChange}
        />
        <input
        type="number"
        name="price"
        placeholder="$"
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
