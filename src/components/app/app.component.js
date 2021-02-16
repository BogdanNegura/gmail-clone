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
import { SendMail } from '../send-mail/send-mail.component';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from '../../features/mail-slice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
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
        {/* <SendMail/> */}
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export { App }
