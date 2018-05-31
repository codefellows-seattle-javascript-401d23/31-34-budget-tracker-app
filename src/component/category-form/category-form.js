import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  name: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  // Lifecycle hooks... =  listens to props and state changes...
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.category) {
      return nextProps.category;
    }
    return defaultState;
  }


  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
        <form
          onSubmit={this.handleSubmit}
          className='category-form'>

          <input
            name='name'
            type='text'
            placeholder='Category Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type='submit'>{buttonText} Category</button>
        </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;
