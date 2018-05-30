import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component {
  render() {
    const {
      category,
      categoryDestroy,
      categoryUpdate,
    } = this.props;
    return (
      <div className = 'category' key = { category.id }>
        <h1> { category.name } </h1>
        <button onClick = {() => categoryDestroy(category)}> Destroy </button>
        <CategoryForm category = { category } onComplete = { categoryUpdate }/>
      </div>
    );
  }
}

CategoryItem.propTypes = {
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

export default connect(null, mapDispatchToProps)(CategoryItem);
