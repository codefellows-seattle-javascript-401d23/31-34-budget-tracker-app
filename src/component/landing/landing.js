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
    console.log(this.props, 'PROPS IN LANDING');
    const { categories, categoryCreate } = this.props;
    return (
      <div className='landing'>
        <CategoryForm onComplete={categoryCreate}/>
        {/* Type sections.sections
        if you need to and check your Landing's props to see what "sections" looks like */}
        {
          categories.categories.map((currentCategory, i) =>
            <Category category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Landing.propTypes = {
  categories: PropTypes.object,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);
