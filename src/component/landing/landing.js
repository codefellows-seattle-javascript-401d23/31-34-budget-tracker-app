'use strict';

import React from 'react';
import autoBind from '../../utils/index';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Landing);
  }

  render() {
    return (
      <section className="landing">
        <h1>Welcome to your budget-tracker, lets get started.</h1>
      </section>
    );
  }
}
