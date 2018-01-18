import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { VotePost } from './Vote';
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
    console.log(ev.target.value);
    this.setState({sort: ev.target.value});
  }
  render() {
    const { posts, deletePost } = this.props;
    const { sort } = this.state;
    const ps = sortList(posts, sort);

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
          {
            ps.map(post=>{
              const moreLink = `/${post.category}/${post.id}`;
              const editLink = `/posts/edit/${post.id}`;
              const ts = new Date(post.timestamp).toDateString();
              return (
                <div key={post.id} className="post-list-item-container">
                  <div className="post-list-item-vote-btns"><VotePost id={post.id} /></div>
                  {/* <VotePost id={post.id} /> */}
                  <div className="post-list-item-content">
                    <div className="post-list-item-header">
                      <div className="post-list-item-title">{post.title}</div>
                      <div className="post-list-item-timestamp">{ts}</div>
                    </div>

                    <div className="post-list-item-body-preview">
                      <p>{post.body.slice(0,200)+'...'}</p>
                      <div className="post-list-item-body-nav">
                        <Link to={moreLink}> More </Link>
                        <Link to={editLink}> Edit </Link>
                        <a href='#' onClick={(e)=>deletePost(post.id)}> Delete </a>
                      </div>
                    </div>
                    <div className="post-list-item-footer">
                      <div className="post-list-item-categories">
                        <p>{post.category}</p>
                      </div>
                      <div className="post-list-item-comm-count">
                        <p>{post.commentCount} comments</p>
                      </div>
                    </div>

                  </div>
                </div>


              );
            })
          }
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, {getPosts: fetchPosts, deletePost})(PostList)
