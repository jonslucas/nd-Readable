import React from 'react';
import { VotePost } from './Vote';
import { Link } from 'react-router-dom';
import './Post.css';


export const Post = (props) => {
  const { post, remove } = props;
  const editLink = `/posts/edit/${post.id}`;

  return (
    <div className="post-container">
      <div className="post-edit-delete-grp">
        <div className="post-edit-btn"><Link to={editLink}> Edit </Link></div>
        <a className="post-delete-btn" onClick={(e)=>{
          remove(post.id);
          window.location.href = `${window.location.origin}/`;
        }}> Delete </a>
      </div>
      <div className="post-vote-btns"><VotePost id={post.id} /> </div>
      <div className="post-content">
        <div className="post-header">
          <div className="post-title">{post.title}</div>
          <div className="post-author">
            {post.author}
            <i className="fa fa-user-circle-o"></i>
          </div>
        </div>
        <div className="post-body">
          {post.body}
        </div>

      </div>
      <div className="post-footer">
        {post.commentCount} comments
      </div>
    </div>
  );
};
