import React from 'react';
import { VoteComm } from './Vote';
import './Comment.css';

export const Comment = (props) => {
  const { comment, edit, remove } = props;
  const date = new Date(comment.timestamp);
  return (
    <div className="comment-container">
      <div className="comment-vote-btns"><VoteComm id={comment.id} /></div>
      <div className="comment-content">
        <div className="comment-body"><p>{comment.body}</p></div>
        <div className="comment-author">
          <i className="fa fa-user-o"></i>
          {comment.author}
        </div>
        <div className="comment-timestamp">{date.toDateString()}</div>
      </div>

      <div className="comment-edit-delete-grp">
        <div onClick={(e)=>edit(comment.id)}> Edit </div>
        <div onClick={(e)=>remove(comment.id)}> Delete </div>
      </div>

    </div>
  );
}
