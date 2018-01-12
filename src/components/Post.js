import React from 'react';
import { VotePost } from './Vote';


export const Post = (props) => {
  const { post } = props;

  return (
    <div>
      <VotePost id={post.id} />
      <div className="post-header">
        <h3>{post.title}</h3>
        <h4><em>{post.author}</em></h4>
      </div>
      <div className="post-body">
        {post.body}
      </div>
      <div className="post-footer">
        <p>Placeholder footer</p>
      </div>
    </div>
  );
};
