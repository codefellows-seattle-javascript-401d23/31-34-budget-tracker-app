import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

//-------------------------------------------------------------------------------------------
class Landing extends React.Component {
  render() {
    // Zachary - in the component, our state is linked AS PROPS
    const { categories, categoryCreate } = this.props;
    return (
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <Category category={currentCategory} key={i} />)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};
//-------------------------------------------------------------------------------------------
const mapStateToProps = (state) => {
  // Zachary - the object we return WILL BECOME PROPS for landing 
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

// Zachary -  this would be what happens behind the scenes
// const middleFunction = connect(mapStateProp, mapDispatchToProps)
// export default middleFunction(Landing);
//-------------------------------------------------------------------------------------------
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
