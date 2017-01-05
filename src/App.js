import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { deleteApp }  from './actions'

class App extends Component {
  render() {
    const apps = this.props.apps.map((app) => {
      return <li key={app.id}>{app.name} <button onClick={ () => this.props.deleteApp(app.id) }>x</button></li>
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <ul>
        {apps}
        </ul>
      </div>
    );
  }
}

const connectedApp = connect((state) => {
  return {
    apps: state.apps
  }
}, { deleteApp })(App)

export default connectedApp;
