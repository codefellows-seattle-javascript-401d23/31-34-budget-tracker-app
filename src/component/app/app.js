import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>This is your budget tracker! Create a category and then add expenses with individual prices.</h1>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
