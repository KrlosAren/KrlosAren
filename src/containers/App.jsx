import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../components/Layout';
import About from '../pages/About';
import Projects from '../pages/Projects';
import MakeSimple from '../pages/MakeSimple';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/makeSimple' component={MakeSimple} />
          <Route exact path='/makeSimple/mini-retos-para-intentar' component={Post} />
          <Redirect from='*' to='/404' />
          <Route exact path='/404' component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
