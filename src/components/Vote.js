import React from 'react';
import { upVotePost,downVotePost, upVoteComment, downVoteComment } from '../actions';
import { connect } from 'react-redux';
import './Vote.css';


// Presentational

const Vote = (props) => {
  const { id, voteUp, voteDown, score } = props;
  return (
    <div className="vote-btns">
      <div className="up-vote" onClick={()=>voteUp(id)}>
        <i className="fa fa-chevron-up fa-3x" aria-hidden="true"></i>
      </div>
      <div className="vote-score">{score}</div>
      <div className="down-vote" onClick={()=>voteDown(id)}>
        <i className="fa fa-chevron-down fa-3x" aria-hidden="true"></i>
      </div>
    </div>
  );
}
const VoteSmall = (props) => {
  const { id, voteUp, voteDown, score } = props;
  return (
    <div className="vote-btns">
      <div className="up-vote" onClick={()=>voteUp(id)}>
        <i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
      </div>
      <div className="vote-score-small">{score}</div>
      <div className="down-vote" onClick={()=>voteDown(id)}>
        <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
      </div>
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
export const VoteComm = connect(mapCommState, mapVoteCommDispatch)(VoteSmall);
