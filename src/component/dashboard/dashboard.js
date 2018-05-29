import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
// import item

class Dashboard extends React.Component {
  render() {
    const { categories, categoryCreate } = this.props;
    return (
      <div>
        <h1>Budget Tracker</h1>
        <CategoryForm onComplete={categoryCreate}/>
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
