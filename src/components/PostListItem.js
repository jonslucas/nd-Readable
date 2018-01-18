import React from 'react';
import {Link} from 'react-router-dom';
import {VotePost} from './Vote';



const PostListItem = (props) => {
  const { post, remove } = props;
  const moreLink = `/${post.category}/${post.id}`;
  const editLink = `/posts/edit/${post.id}`;
  const ts = new Date(post.timestamp).toDateString();

  return (
    <div key={post.id} className="post-list-item-container">
      <div className="post-list-item-vote-btns">
        <VotePost id={post.id} />
      </div>
      <div className="post-list-item-content">
        <div className="post-list-item-header">
          <div className="post-list-item-title">{post.title}</div>
          <div className="post-list-item-timestamp">{ts}</div>
        </div>

        <div className="post-list-item-body-preview">
          <p>{post.body.slice(0,200)+'...'}</p>
          <div className="post-list-item-body-nav">
            <div className="post-list-item-body-nav-btn nav-btn more-btn" ><Link to={moreLink}> More </Link></div>
            <div className="post-list-item-body-nav-btn nav-btn edit-btn" ><Link to={editLink}> Edit </Link></div>
            <div className="post-list-item-body-nav-btn nav-btn delete-btn" onClick={(e)=>remove(post.id)}> Delete </div>
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
}

export default PostListItem;
