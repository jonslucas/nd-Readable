import * as API from '../utils/api';

export const SUBMIT_POST = 'SUBMIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_UP_COMM = 'VOTE_UP_COMM';
export const VOTE_DOWN_COMM = 'VOTE_DOWN_COMM';
export const VOTE_UP_POST = 'VOTE_UP_POST';
export const VOTE_DOWN_POST = 'VOTE_DOWN_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const INCREMENT_COMMENT = 'INCREMENT_COMMENT';

function upVoteCommLocal(id) {
  return {
    type: VOTE_UP_COMM,
    id
  };
}

function upVotePostLocal(id) {
  return {
    type: VOTE_UP_POST,
    id
  };
}

function downVoteCommLocal(id) {
  return {
    type: VOTE_DOWN_COMM,
    id
  };
}

function downVotePostLocal(id) {
  return {
    type: VOTE_DOWN_POST,
    id
  };
}
function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}
function addCommentLocal({id, author, body, parentId, timestamp, voteScore}) {
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

function deleteCommentLocal(id) {
  return {
    type: DELETE_COMMENT,
    id,
  };
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

function addPostLocal({
  id,
  title,
  author,
  body,
  timestamp,
  voteScore,
  category
}) {
  return {
    type: SUBMIT_POST,
    id,
    title,
    author,
    body,
    timestamp,
    voteScore,
    category,
  };
}

function deletePostLocal(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

function incrementCommentCount(id) {
  return {
    type: INCREMENT_COMMENT,
    id
  }
}

export const fetchPosts = () => dispatch => (
  API
  .fetchPosts()
  .then(posts=>{
    const ps = {};
    posts.forEach(p=>ps[p.id]=p);
    dispatch(receivePosts(ps));
  }).catch(error=>console.log)
);

export const fetchPost = (postId) => dispatch => (
  API
  .fetchPost(postId)
  .then(post=>{
    dispatch(addPostLocal(post));
  }).catch(error=>console.log)
);

export const addPost = (post) => dispatch => (
  API.addPost(post)
     .then(r=>dispatch(addPostLocal(post)))
     .catch(e=>console.log)
);
export const updatePost = (post) => dispatch => (
  API.updatePost(post.id, {title:post.title,body:post.body})
     .then(r=>dispatch(addPostLocal(post)))
     .catch(e=>console.log)
);
export const upVotePost = (id) => dispatch => (
  API.votePost(id, 'upVote')
     .then(r=>dispatch(upVotePostLocal(id)))
     .catch(console.log)
);
export const downVotePost = (id) => dispatch => (
  API.votePost(id, 'downVote')
     .then(r=>dispatch(downVotePostLocal(id)))
     .catch(console.log)
);
export const deletePost = (id) => dispatch => (
  API.deletePost(id)
     .then(r=>dispatch(deletePostLocal(id)))
     .catch(console.log)
);

export const fetchComments = (postId) => dispatch => (
  API.fetchComments(postId)
     .then(comments=>{
       const cs = {};
       comments.forEach(c=>cs[c.id]=c);
       dispatch(receiveComments(cs));
     })
);
export const addComment = (comment) => dispatch => (
  API.addComment(comment)
     .then(r=>dispatch(addCommentLocal(comment)))
     .then(r=>dispatch(incrementCommentCount(comment.parentId)))
     .catch(console.log)
);
export const updateComment = (comment) => dispatch => (
  API.updateComment(comment.id, {timestamp: comment.timestamp, body: comment.body})
     .then(r=>dispatch(addCommentLocal(comment)))
     .catch(console.log)
);

export const upVoteComment = (id) => dispatch => (
  API.voteComment(id, 'upVote')
     .then(r=>dispatch(upVoteCommLocal(id)))
     .catch(console.log)
);
export const downVoteComment = (id) => dispatch => (
  API.voteComment(id, 'downVote')
     .then(r=>dispatch(downVoteCommLocal(id)))
     .catch(console.log)
);
export const deleteComment = (id) => dispatch => (
  API.deleteComment(id)
     .then(r=>dispatch(deleteCommentLocal(id)))
     .catch(console.log)
);
