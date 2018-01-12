import React from 'react';
import { VoteComm } from './Vote';

export const Comment = (props) => {
  const { comment } = props;
  console.log(JSON.stringify(comment, null, 2));
  return (
    <div className="comment-container">
      <VoteComm id={comment.id} />
      <div><p>{comment.body}</p></div>
      <div><p>{comment.author}</p></div>
      <div><p>{comment.timestamp}</p></div>
    </div>
  );
}
