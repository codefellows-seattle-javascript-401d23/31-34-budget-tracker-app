import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard} />
            <h1>Welcome to Mikes Budget Tracker!</h1>
          </div>
        </BrowserRouter>
        </div>
    );
  }
}
