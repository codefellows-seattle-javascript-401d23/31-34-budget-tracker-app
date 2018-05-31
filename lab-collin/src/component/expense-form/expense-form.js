import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const emptyState = { name: '', price: 0 };


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const sectionId = this.props.section ? this.props.section.id : this.props.expense.sectionId;

    this.props.onComplete({
      ...this.state,
      sectionId,
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
          type="number"
          name="price"
          placeholder="expense price"
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

