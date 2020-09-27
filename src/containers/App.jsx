import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Layout from '../components/Layout';
import About from './About';
import Projects from './Projects';
import MakeSimple from './MakeSimple';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/MakeSimple' component={MakeSimple} />
          <Route exact path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
