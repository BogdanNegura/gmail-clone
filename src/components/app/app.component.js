import React from 'react'
import { Sidebar } from '../sidebar/sidebar.component';
import { Header } from '../header/header.component';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Mail } from '../mail/mail.component';
import { MailList } from '../mail-list';
import "./app.style.css"

const App = () => {
  return (
    <Router>
      <div className="app">
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
