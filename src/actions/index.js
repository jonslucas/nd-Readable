export const SUBMIT_POST = 'SUBMIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function addComment({id, author, comment, createTime}) {
  return {
    type: ADD_COMMENT,
    id,
    author,
    comment,
    createTime,
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
