import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';

// this is in the UI STATE!!!!
const defaultState = {
  title:'',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }
  // ----------------MEMBER FUNCTIONS------------------
  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }

  // --------------------LIFECYCLE HOOKS-------------------

  //static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.category) {
  //     return nextProps.category;
  //   }
  //   return defaultState;
  // }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return(
        <form
        onSubmit={this.handleSubmit}
        className='category-form'>

          <input
            type='text'
            name='title'
            placeholder='Category'
            value={this.state.title}
            onChange={this.handleChange}
            />
          <button type='submit'>{buttonText} Category</button>
        </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object, // Josh - this is used to update categories
};

export default CategoryForm;