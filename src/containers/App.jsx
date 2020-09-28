import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Layout from '../components/Layout';
import About from './About';
import Projects from './Projects';
import MakeSimple from './MakeSimple';
import NotFound from './NotFound';
import Menu from './Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blog' component={MakeSimple} />
          <Route path='/notfound' component={NotFound} />
          <Redirect from='*' to='/notfound' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
