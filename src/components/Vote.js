import React from 'react';
import { upVotePost,downVotePost, upVoteComment, downVoteComment } from '../actions';
import { connect } from 'react-redux';


// Presentational

const Vote = (props) => {
  const { id, voteUp, voteDown, score } = props;
  return (
    <div className="vote-btns">
      <button className="up-vote" onClick={()=>voteUp(id)}>+</button>
      <h3 className="vote-score">{score}</h3>
      <button className="down-vote" onClick={()=>voteDown(id)}>-</button>
    </div>
  );
}

const mapVotePostDispatch = (dispatch) => {
  return {
    voteUp: (id)=>dispatch(upVotePost(id)),
    voteDown: (id)=>dispatch(downVotePost(id)),
  };
};

const mapVoteCommDispatch = (dispatch) => {
  return {
    voteUp: (id)=>dispatch(upVoteComment(id)),
    voteDown: (id)=>dispatch(downVoteComment(id)),
  };
};

const mapPostState = ({posts}, ownProps) => {
  const p = posts[ownProps.id];
  return {
    id: p.id,
    score: p.voteScore
  };
};
const mapCommState = ({comments}, ownProps) => {
  const c = comments[ownProps.id];
  return {
    id: c.id,
    score: c.voteScore
  };
};

export const VotePost = connect(mapPostState, mapVotePostDispatch)(Vote);
export const VoteComm = connect(mapCommState, mapVoteCommDispatch)(Vote);
