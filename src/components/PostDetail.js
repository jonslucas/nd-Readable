import React from 'react';
import { connect } from 'react-redux'
import { Post } from './Post';
import { Comment } from './Comment';


const PostDetail = (props) => {
  // console.log(JSON.stringify(props.comments, null, 2));
  const {post, comments} = props;
  const commView = comments.map(c=><Comment comment={c} />);
  return (
    <div>
      <Post post={post} />
      {commView}

    </div>
  );
}

export default connect(({posts, comments},ownProps)=>{

  const { postId } = ownProps.match.params;

  return {
    post: posts[postId],
    comments:Object.keys(comments)
                   .map(ids=>comments[ids])
                   .filter(c=>c.parentId===postId)
                   .filter(c=>!c.deleted||!c.parentDeleted),
    ...ownProps,
  }
})(PostDetail);
