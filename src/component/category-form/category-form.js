import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  name: '',
  budget: 0,
  error: false,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
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
    this.setState({ error: false });
    return this.props.onComplete(this.state);
  }
  
  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <div className='categoryForm'>
      <form onSubmit={this.handleSubmit} className='categoryForm'>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={this.handleChange}
      />
      <input
        type='number'
        name='budget'
        placeholder='Budget'
        value={this.state.budget}
        onChange={this.handleChange}
      />
      <button type='submit'>{buttonText} Category</button>
      </form>
      { this.state.error && <h2 className="error">You must enter a name for this budget item.</h2> }
      </div>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;
