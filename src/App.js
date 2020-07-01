import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SingalPost from './components/pages/SingalPost/Post';
import NotFound from './components/pages/NotFound';

// Bring in 404 page

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={SingalPost} path='/job-post' exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
