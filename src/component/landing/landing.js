import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';


class Landing extends React.Component{
  render() {
    // Josh in the component, our state is linked AS PROPS
    const { categories, categoryCreate } = this.props;
    return(
        <div className='landing'>
          <CategoryForm onComplete={categoryCreate}/>
          {
            categories.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
          }
        </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

// Josh - below to read the state
const mapStateToProps = (state) => {
  // the object we return WILL BECOME PROPS for landing
  return {
    categories: state,
  };
};

// Josh - to change the state
const mapDispatchToProps = (dispatch) => {
  return {
    // only action is needed parameter for dispatch function
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// Josh - above we are curring Landing
// connect function connects to the STATE that need
