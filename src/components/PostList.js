import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { VotePost } from './Vote';
import PostListItem from './PostListItem'
import { fetchPosts, deletePost } from '../actions';
import Sort  from './Sort';
import sortList from '../utils/sortList';
import './PostList.css';


const mapStateToProps = ({posts}, ownProps) => {
  posts = Object.keys(posts).map(postID=>{
    return {
      ...posts[postID],
    };
  }).filter(p=>!p.deleted);
  const {category} = ownProps.match.params;
  if (category) {

    return {
      posts: posts.filter(p=>p.category===category)
    };
  }
  return {
    posts
  };

}

class PostList extends React.Component {
  state={
    sort: 'high'
  }
  componentWillMount() {
    this.props.getPosts();
  }
  changeSort = (ev) => {
    this.setState({sort: ev.target.value});
  }
  render() {
    const { posts, deletePost } = this.props;
    const { sort } = this.state;
    const ps = sortList(posts, sort).map(p=><PostListItem post={p} remove={deletePost} />);

    return (
      <div>
        <div className='cat-nav'>
          <div className="cat-nav-label"> Categories: </div>
          <NavLink to="/react" className="cat-btn" activeClassName="selected">React</NavLink>
          <NavLink to="/redux" className="cat-btn" activeClassName="selected">Redux</NavLink>
          <NavLink to="/udacity" className="cat-btn" activeClassName="selected">Udacity</NavLink>
          <NavLink to="/" exact className="cat-btn" activeClassName="selected">None</NavLink>
        </div>
        <div className='sort-grp'><Sort currSort={sort} changeSort={this.changeSort} /></div>
        <div className='posts-container'>
          {ps.length>0 ? ps :
            <div className="no-posts-found">
              <h3>No Post Found</h3>
              <p> ...why don't you share something?</p>
            </div>
          }
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, {getPosts: fetchPosts, deletePost})(PostList)
