import React from 'react';
import { connect } from 'react-redux'

const PostDetail = (props) => {
  // console.log(JSON.stringify(props), null, 2);
  const {post} = props;
  return (
    <div>
      <div className="post-header">
        {/* <h3>Placeholder Title</h3>
        <h4><em>Placeholder Author</em></h4> */}
        <h3>{post.title}</h3>
        <h4><em>{post.author}</em></h4>
      </div>
      <div className="post-body">
        {post.body}
        {/* <p>Placeholder body</p> */}
      </div>
      <div className="post-footer">
        <p>Placeholder footer</p>
      </div>
    </div>
  );
}

export default connect(({posts, comments},ownProps)=>{

  const { postId } = ownProps.match.params;
  
  return {
    post: posts[postId],
    comments:Object.keys(comments)
                   .map(ids=>comments[ids])
                   .filter(c=>c.postId===postId),
    ...ownProps,
  }
})(PostDetail);
