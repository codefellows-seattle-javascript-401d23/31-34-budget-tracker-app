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
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.categories.map((currentCategory, i) => <CategoryItem category={currentCategory} key={i}/>) // eslint-disable-line
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  category: PropTypes.object,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapToDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapToDispatchToProps)(Dashboard);
