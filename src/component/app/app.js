import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <Landing/>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
