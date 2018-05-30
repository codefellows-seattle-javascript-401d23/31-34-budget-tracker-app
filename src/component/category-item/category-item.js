import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import Modal from '../modal/modal';
import * as categoryActions from '../../action/category';
import ExpenseForm from '../ex'

import './category-item.scss';

class CategoryItem extends React.Component {
  render() {
    const { category, categoryUpdate, categoryDestroy } = this.props;
    const showModal = () => categoryUpdate({ ...category, editing: true });
    const hideModal = () => categoryUpdate({ ...category, editing: false });
    return (
      <div className='category-item'>
        <button onClick={() => categoryDestroy(category)}> remove </button>
        <button onClick={showModal}> update </button>
        <h4>{category.name.toUpperCase()}</h4>
        <p>Budget allotted: ${category.budget}</p>
        <p>Description: {category.description}</p>
        <Modal show={category.editing} handleClose={hideModal}>
          <CategoryForm onComplete={categoryUpdate} category={category}/>
        </Modal>
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
