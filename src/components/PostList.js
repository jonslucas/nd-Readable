import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const mapStateToProps = ({posts, comments}, ownProps) => {

  return {
    posts: Object.keys(posts).map(postID=>{
      // console.log(JSON.stringify(posts[postID],null,2));
      return posts[postID];
    })
  };

}


const PostList = (props) => {
  return (
    <div>
      {
        props.posts.map(post=>{
          const link = `/post/${post.id}`;
          return (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <div className="body-preview">
                <p>{post.body.slice(0,200)+'...'}</p>
                <Link to={link}> More </Link>
              </div>
              <div className="categories">
                <p>{post.category}</p>
              </div>
            </div>


          );
        })
      }

    </div>
  );
}

export default connect(mapStateToProps)(PostList)
