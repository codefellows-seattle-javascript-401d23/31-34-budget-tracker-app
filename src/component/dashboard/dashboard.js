import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;

    // console.log(categories, 'categories');

    return (
      <div className='dashboard'>
        <h1>Add a Budget Category Here!</h1>
        <p>Budget categories should be things like transportation, housing, food, etc... </p>
        <CategoryForm onComplete={categoryCreate}/>
        { categories ?
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
          : undefined
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
  // console.log(state, 'state in DASHBOARD');
  return {
    categories: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
