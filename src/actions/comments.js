import * as Types from './types';

export function upVoteCommLocal(id) {
  return {
    type: Types.VOTE_UP_COMM,
    id
  };
}

export function downVoteCommLocal(id) {
  return {
    type: Types.VOTE_DOWN_COMM,
    id
  };
}


export function receiveComments(comments) {
  return {
    type: Types.RECEIVE_COMMENTS,
    comments
  };
}
export function addCommentLocal(comment) {
  return {
    type: Types.ADD_COMMENT,
    ...comment
  };
}

export function deleteCommentLocal(id) {
  return {
    type: Types.DELETE_COMMENT,
    id,
  };
}
