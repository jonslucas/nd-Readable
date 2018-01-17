import React from 'react';
import { VoteComm } from './Vote';

export const Comment = (props) => {
  const { comment, edit } = props;
  // console.log(JSON.stringify(comment, null, 2));
  const date = new Date(comment.timestamp);
  return (
    <div className="comment-container">
      <VoteComm id={comment.id} />
      <div><p>{comment.body}</p></div>
      <div><p>{comment.author}</p></div>
      <div><p>{date.toDateString()}</p></div>
      <a href="#comment-edit" onClick={(e)=>edit(comment.id)}> Edit </a>
    </div>
  );
}
