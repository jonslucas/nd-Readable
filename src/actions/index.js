export const SUBMIT_POST = 'SUBMIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_UP_COMM = 'VOTE_UP_COMM';
export const VOTE_DOWN_COMM = 'VOTE_DOWN_COMM';
export const VOTE_UP_POST = 'VOTE_UP_POST';
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST';

export function upVoteComm(id) {
  return {
    type: VOTE_UP_COMM,
    id
  };
}

export function upVotePost(id) {
  return {
    type: VOTE_UP_POST,
    id
  };
}

export function downVoteComm(id) {
  return {
    type: VOTE_DOWN_COMM,
    id
  };
}

export function downVotePost(id) {
  return {
    type: VOTE_DOWN_POST,
    id
  };
}

export function addComment({id, author, body, parentId, voteScore, timestamp}) {
  return {
    type: ADD_COMMENT,
    id,
    author,
    body,
    parentId,
    voteScore,
    timestamp,
  };
}

export function deleteComment({id}) {
  return {
    type: DELETE_COMMENT,
    id,
  };
}

export function addPost({
  id,
  title,
  author,
  body,
  createTime,
  voteScore,
  category
}) {
  return {
    type: SUBMIT_POST,
    id,
    title,
    author,
    body,
    createTime,
    voteScore,
    category,
  };
}

export function deletePost({id}) {
  return {
    type: DELETE_POST,
    id,
  };
}
