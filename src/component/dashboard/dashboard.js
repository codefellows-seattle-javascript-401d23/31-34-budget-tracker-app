import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import './dashboard.scss';

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <h1>budget tracker</h1>
        <p>Budget Tracker allows you to keep track of all your expenses. In the form
        below, just input the category of your expense, how much you would like to
        allocate to that expense, and a small description of that category.</p>
        <CategoryForm onComplete={categoryCreate}/>
        {
          categories.map((category, i) => (<CategoryItem category={category} key={i}/>))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
