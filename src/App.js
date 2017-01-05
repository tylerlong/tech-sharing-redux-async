import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { deleteApp, displayReviews }  from './actions'
import { timeout } from './lib'

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  // https://itunes.apple.com/us/rss/customerreviews/page=1/sortBy=mostRecent/id=715886894/json
  async fetchReviews(id, name) {
    console.log('this.fetchReviews');
    await timeout(2000)
    const response = await fetch(`data/${id}.json`)
    const content = await response.text()
    this.props.displayReviews(name, content)
  }

  render() {
    const apps = this.props.apps.map((app) => {
      return <li key={app.id}>
        <a href="#" onClick={ () => this.fetchReviews(app.id, app.name) }>{app.name}</a>
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
}, { deleteApp, displayReviews })(App)

export default connectedApp;
