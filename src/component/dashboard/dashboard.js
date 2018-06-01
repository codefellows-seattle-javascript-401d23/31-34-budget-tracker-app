import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

//--------------------------------------------------------------
class Dashboard extends React.Component {
  render() {
    // - in the component, our state is linked AS PROPS
    const { categories, categoryCreate } = this.props;
    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate}/>
        {
          categories.map((currentCategory, i) =>
            <Category category={currentCategory} key={i}/>)
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
