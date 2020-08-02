import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';

import Main from './layouts/Main';
import Footer from './layouts/Footer';

import MainNav from './components/navigation/MainNav';
import MobileNav from './components/navigation/MobileNav';

import './scss/styles.scss';

export default function App() {
  return (
    <Fragment>
      <MainNav />
      <MobileNav />
      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </Main>
      <Footer />
    </Fragment>
  );
}
