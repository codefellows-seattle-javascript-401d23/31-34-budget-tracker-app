import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const emptyState = { content: '' };

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.card || emptyState;
    autoBind.call(this, CardForm);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const sectionId = this.props.section ? this.props.section.id : this.props.card.sectionId;

    // Zachary - lines 24 - 27 are the same as lines 29 - 33.
    // {
    //   content: 'some content',
    //   sectionId: sectionid,
    // }

    this.props.onComplete({
      ...this.state,
      sectionId, 
    });
    this.setState(emptyState);
  }

  render() {
    console.log('LKDJLKJSDLKFJLKSJDFLJK', this.state);
    const { card } = this.props;
    const buttonText = card ? 'Update Card' : 'Create Card';

    return (
      <form
        className="card-form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="beans"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit"> {buttonText} </button>
        </form>
    );
  }
}

CardForm.propTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
  card: PropTypes.object,
};
