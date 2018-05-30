import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

//--------------------------------------------------------------
class Landing extends React.Component {
  render() {
    // - in the component, our state is linked AS PROPS
    const { category, categoryCreate } = this.props;
    return (
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate}/>
        {
          category.map((currentCategory, i) => <Category category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  category: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    category: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);
