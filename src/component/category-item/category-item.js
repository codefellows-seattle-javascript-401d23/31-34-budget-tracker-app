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
      <div className='categoryItem' key={category.id}>
        <div className='categoryItemDisplay'>
        <h2>{ category.name }</h2>
        <p>${ category.budget }</p>
        </div>
        <button className='categoryItemDelete' onClick={() => categoryDestroy(category)}>X</button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
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
