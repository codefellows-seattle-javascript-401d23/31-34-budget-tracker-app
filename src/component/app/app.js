import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrouserRouter>
          <div>
            <Route exact path='/' component={Landing} />
          </div>
        </BrouserRouter>
      </div>
    );
  }
}

export default App;
