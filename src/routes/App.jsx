import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../components/Layout';
import About from '../pages/About';
import Projects from '../pages/Projects';
import MakeSimple from '../pages/MakeSimple';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';

import ScrollToTop from '../components/ScrollTop';
import Spinner from '../components/Spinner';

const App = () => {

  const [load, setLoad] = useState({ loading: true });

  useEffect(() => {
    // if (document.readyState === 'complete') setLoad({ loading: false });

    window.addEventListener('load', () => {
      if (document.readyState === 'complete') setLoad({ loading: false });
    });
  }, []);

  if (load.loading) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
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
