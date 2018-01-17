import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { VotePost } from './Vote';
import { fetchPosts, deletePost } from '../actions';
import Sort  from './Sort';
import sortList from '../utils/sortList';


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
          <NavLink to="/react"><button>React</button></NavLink>
          <NavLink to="/redux"><button>Redux</button></NavLink>
          <NavLink to="/udacity"><button>Udacity</button></NavLink>
        </div>
        <Sort currSort={sort} changeSort={this.changeSort} />
        <div className='posts-container'>
          {
            ps.map(post=>{
              const moreLink = `/${post.category}/${post.id}`;
              const editLink = `/posts/edit/${post.id}`;
              const ts = new Date(post.timestamp).toDateString();
              return (
                <div key={post.id} className="post-list-item-container">
                  <div>{ts}</div>
                  <VotePost id={post.id} />
                  <div className="post-list-item-content">
                    <h4>{post.title}</h4>
                    <div className="body-preview">
                      <p>{post.body.slice(0,200)+'...'}</p>
                      <Link to={moreLink}> More </Link>
                      <Link to={editLink}> Edit </Link>
                      <button onClick={(e)=>deletePost(post.id)}> Delete </button>
                    </div>
                    <div className="categories">
                      <p>{post.category}</p>
                    </div>
                    <div className="comm-count">
                      {post.commentCount} comments
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
