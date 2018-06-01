import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';
import Modal from '../modal/modal';
import './category-form.scss';

const defaultState = {
  title: '',
  budget: '',
  editing: false,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      editing: false,
    });
    this.props.onComplete(this.state);
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
    const buttonText = this.props.category ? 'Update' : 'Create';

    return (
      <div className='category-block'>
        <button onClick={this.handleShowModal}>Create a Category</button>
      <Modal show={this.state.editing} handleClose={this.handleHideModal}>
      <form onSubmit={this.handleSubmit}
      className='category-form'>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br/>
        <input
          type='number'
          name='budget'
          placeholder='Budget(dollars)'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <br/>
        <button type="submit">{buttonText} Category</button>
      </form>
      </Modal>
      </div>
    );
  }
}
CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;
