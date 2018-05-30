import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    return(
        <div className='category' key={key}>
          <h1>
            { category.title }
          </h1>
          <button onClick={() => categoryRemove(category) }> Delete </button>
          <categoryForm category={category} onComplete={categoryUpdate}/>
        </div>
    );
  }
}

Category.propTypes = {
  // Josh - below were are connecting all of the state
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: data => PropTypes.func,
  categoryUpdate: data => PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);

// connect(state, connecting to the Dispatch function)(curring to make the actual connection
// component)
