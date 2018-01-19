import * as Types from './types';

export function upVotePostLocal(id) {
  return {
    type: Types.VOTE_UP_POST,
    id
  };
}

export function downVotePostLocal(id) {
  return {
    type: Types.VOTE_DOWN_POST,
    id
  };
}



export function receivePosts(posts) {
  return {
    type: Types.RECEIVE_POSTS,
    posts
  };
}

export function addPostLocal(post) {
  return {
    type: Types.SUBMIT_POST,
    ...post
  };
}

export function deletePostLocal(id) {
  return {
    type: Types.DELETE_POST,
    id,
  };
}

export function incrementCommentCount(id) {
  return {
    type: Types.INCREMENT_COMMENT,
    id
  }
}
