import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PostList from './PostList';
import PostEdit from './PostEdit';
import PostDetail from './PostDetail';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-header">
          <div className="nav-brand">
            <Link to="/">
              <h3 className="brand">Readable</h3>
            </Link>
          </div>
          <div className="nav-items">
            <Link to='/'>Posts</Link>
            <Link to='/posts/add'>Add Post </Link>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/' component={PostList}/>
            <Route exact path='/posts/add' component={PostEdit} />
            <Route path='/post/:postId' component={PostDetail} />
            <Route path='/search' component={Search} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
