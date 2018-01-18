import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import PostList from './PostList';
import PostEdit from './PostEdit';
import PostDetail from './PostDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-header">
          <div className="nav-brand">
            <NavLink to="/">
              <h3 className="brand">Readable</h3>
            </NavLink>
          </div>
          <div className="nav-items">
            <NavLink to='/posts/add'>Add Post </NavLink>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/' component={PostList}/>
            <Route exact path='/posts/add' component={PostEdit} />
            <Route exact path='/posts/edit/:postId' component={PostEdit} />
            <Route exact path='/:category' component={PostList} />
            <Route exact path='/:category/:postId' component={PostDetail} />
            <Route component={PostList} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
