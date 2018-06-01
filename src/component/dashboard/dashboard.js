import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class Dashboard extends React.Component {
  render() {
    const { category, categoryCreate } = this.props;
    return (
      <div className = 'dashboard'>
        <h1>Your new favorite budget tracker!!!</h1>
        <CategoryForm onComplete = { categoryCreate }/> {
          category.map((currentCategory, i) => 
          <CategoryItem category = { currentCategory } key = { i }/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  category: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
