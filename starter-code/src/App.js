import React, { Component, Fragment } from 'react';
import './App.css';
import contacts from './contacts.json';
import List from './List';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>IronContacts</h1>
        <List />
      </Fragment>
    );
  }
}

export default App;
