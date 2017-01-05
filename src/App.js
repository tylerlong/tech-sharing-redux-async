import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { deleteApp, fetchReviews }  from './actions'
// import { bindActionCreators } from 'redux'


class App extends Component {
  render() {
    // const bondActionCreators = bindActionCreators({ deleteApp }, this.props.dispatch)
    const apps = this.props.apps.map((app) => {
      return <li key={app.id}>
        <a href="#" onClick={ () => this.props.fetchReviews(app.id, app.name) }>{app.name}</a>
        <button onClick={ () => this.props.deleteApp(app.id) }>x</button>
      </li>
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <ul>
        {apps}
        </ul>
        <h1>{this.props.reviews.name}</h1>
        <pre>
        {this.props.reviews.content}
        </pre>
      </div>
    );
  }
}

const connectedApp = connect((state) => {
  return {
    apps: state.apps,
    reviews: state.reviews
  }
}, { deleteApp, fetchReviews })(App)

export default connectedApp;
