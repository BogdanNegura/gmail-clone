import React from 'react'
import { Sidebar } from '../sidebar/sidebar.component';
import { Header } from './header/header.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Mail } from '../mail/mail.component';
import { MailList } from '../mail-list';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar/>
          
          <Switch>
            <Route path="/mail">
              <Mail/>
            </Route>
            <Route path="/">
              <MailList/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export { App }
