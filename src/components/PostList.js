import React from 'react';
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { VotePost } from './Vote';


const mapStateToProps = ({posts, comments}, ownProps) => {
  posts = Object.keys(posts).map(postID=>{
    // console.log(JSON.stringify(posts[postID],null,2));
    return posts[postID];
  });
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


const PostList = (props) => {
  const { posts, upPost, downPost } = props;
  return (
    <div>
      <div className='cat-nav'>
        <NavLink to="/react"><button>React</button></NavLink>
        <NavLink to="/redux"><button>Redux</button></NavLink>
        <NavLink to="/udacity"><button>Udacity</button></NavLink>
      </div>
      <div className='posts-container'>
        {
          posts.map(post=>{
            const link = `/${post.category}/${post.id}`;
            return (
              <div key={post.id} className="post-list-item-container">
                <VotePost id={post.id} />
                <div className="post-list-item-content">
                  <h4>{post.title}</h4>
                  <div className="body-preview">
                    <p>{post.body.slice(0,200)+'...'}</p>
                    <Link to={link}> More </Link>
                  </div>
                  <div className="categories">
                    <p>{post.category}</p>
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

export default connect(mapStateToProps)(PostList)
