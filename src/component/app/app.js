import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
        <div className='app'>
          <BrowserRouter>
            <div>
              <Route exact path='/' component={Landing} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
