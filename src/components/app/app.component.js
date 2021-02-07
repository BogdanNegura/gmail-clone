import React from 'react'
import { Sidebar } from '../sidebar/sidebar.component';
import { Header } from './header/header.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
    </div>
  );
}

export { App }
