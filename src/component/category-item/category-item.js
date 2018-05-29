import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const { category, categoryUpdate, categoryDestroy } = this.props;
    return (
      <div className='category-item'>
        <h4>{category.name.toUpperCase()}</h4>
        <p>Budget allotted: ${category.budget}</p>
        <p>Description: {category.description}</p>
        <button onClick={() => categoryDestroy(category)}> remove </button>
        <CategoryForm onComplete={categoryUpdate} category={category}/>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
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
