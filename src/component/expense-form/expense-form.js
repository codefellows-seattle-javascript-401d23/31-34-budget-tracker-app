import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import Modal from '../modal/modal';

const defaultState = {
  name: '',
  price: '',
  editing: false,
};

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.expense || defaultState;
    autoBind.call(this, ExpenseForm);
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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleShowModal() {
    this.setState({
      editing: true,
    });
  }
  handleHideModal() {
    this.setState({
      editing: false,
    });
  }
  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update' : 'Create';
    return (
      <div>
        <button onClick={this.handleShowModal}>Create an Expense</button>
      <Modal show={this.state.editing} handleClose={this.handleHideModal}>
      <form onSubmit={this.handleSubmit}
            className='expense-form'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type='number'
          name='price'
          placeholder='price(dollars)'
          value={this.state.price}
          onChange={this.handleChange}
        />
        <br/>
        <button type="submit">{buttonText} Expense</button>
      </form>
      </Modal>
      </div>
    );
  }
}
ExpenseForm.propTypes = {
  expense: PropTypes.object,
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default ExpenseForm;
