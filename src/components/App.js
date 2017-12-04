import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PostList from './PostList';
import NewPost from './NewPost';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-header">
          <div className="nav-brand">
            <h3 className="brand">Readable</h3>
          </div>
          <div className="nav-items">
            <Link to='/'>Posts</Link>
            <Link to='/posts/add'>Add Post </Link>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/' component={PostList}/>
            <Route path='/posts/add' component={NewPost} />
            <Route path='/search' component={Search} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
