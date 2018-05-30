import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryAction from '../../action/section';

class Category extends React.Component {
  render() {
    const {
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;
    return (
      <div className='section' key={key}>
        <h1> { category.title }</h1>
        <button onClick={() => categoryRemove(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    sectionRemove: data => dispatch(categoryAction.remove(data)),
    sectionUpdate: data => dispatch(categoryAction.update(data)),
  };
};

export default connect(null, mapDispatchToProps)(Category);
