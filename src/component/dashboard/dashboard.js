import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';


class Dashboard extends React.Component {
  render() {
    // Josh in the component, our state is linked AS PROPS
    const { categories, categoryCreate } = this.props;
    return (
        <div className='dashboard'>
          <header className='header'>
            <h1> UA Budget tracker </h1>
          </header>
          <br/>
          <CategoryForm onComplete={ categoryCreate }/>
          {
            categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
          }
          <br/>
        </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

// Josh - below to read the state
const mapStateToProps = (state) => {
  // the object we return WILL BECOME PROPS for dashboard
  return {
    categories: state.categories,
  };
};

// Josh - to change the state
const mapDispatchToProps = (dispatch) => {
  return {
    // only action is needed parameter for dispatch function
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// Josh - above we are curring Dashboard
// connect function connects to the STATE that need
