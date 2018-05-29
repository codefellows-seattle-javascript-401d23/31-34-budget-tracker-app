import React from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import * as sectionActions from '../../action/section';
import SectionForm from '../section-form/section-form';
import Section from '../section/section';


class Landing extends React.Component {
  render() {
    // Josh in the component, our state is linked AS PROPS
    const { sections, sectionCreate } = this.props;
    return(
        <div className='landing'>
          <SectionForm onComplete/>
          {
            sections.map((currentSection,i) =>
            <Section={currentSection} key={i})/>
          }
        </div>
    );
  }
}

Landing.propTypes = {
  sections: PropTypes.array,
  sectionCreate: PropTypes.func,
};

// Josh - below to read the state
const mapStateToProps = () => {
  // the object we return WILL BECOME PROPS for landing
  return {
    sections: state,
  };
};

// Josh - to change the state
const mapDispatchToProps = (dispatch) => {
  return {
    // only action is needed parameter for dispatch function
    sectionCreate: data => dispatch(sectionActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
// Josh - above we are curring Landing
// connect function connects to the STATE that need
