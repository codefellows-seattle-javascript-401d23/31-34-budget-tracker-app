import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../categoryForm/categoryForm';
import Category from '../categoryItem/categoryItem';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate}/>
        {
          categories.categories.map((currentCategory, i) => 
          <Category category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
