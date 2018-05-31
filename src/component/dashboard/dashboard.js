'use strict';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div className='Dashboard'>
        <div className='budgetFormHeader'>
        <h2>Budget Form</h2>
        <CategoryForm onComplete={categoryCreate}/>
        </div>
        {
          categories.map(currentCategory => 
          <CategoryItem category={currentCategory} key={currentCategory.id}/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
