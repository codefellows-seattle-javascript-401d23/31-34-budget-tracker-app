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
      categoryDestroy,
      categoryUpdate,
    } = this.props;
    return (
      <div className='category' key={key}>
        <h3> Category: <strong>{category.name}</strong> | Budget: <strong>${category.budget}</strong></h3>
        <button onClick={() => categoryDestroy(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
