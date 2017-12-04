import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PostList from './PostList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={PostList}/>
        </Switch>

      </div>
    );
  }
}

export default App;
