import * as API from '../utils/api';
import * as PAction from './posts';
import * as CAction from './comments';


export const fetchPosts = () => dispatch => (
  API
  .fetchPosts()
  .then(posts=>{
    const ps = {};
    posts.forEach(p=>ps[p.id]=p);
    dispatch(PAction.receivePosts(ps));
  }).catch(error=>console.log)
);

export const fetchPost = (postId) => dispatch => (
  API
  .fetchPost(postId)
  .then(post=>{
    dispatch(PAction.addPostLocal(post));
  }).catch(error=>console.log)
);

export const addPost = (post) => dispatch => (
  API.addPost(post)
     .then(r=>dispatch(PAction.addPostLocal(post)))
     .catch(e=>console.log)
);
export const updatePost = (post) => dispatch => (
  API.updatePost(post.id, {title:post.title,body:post.body})
     .then(r=>dispatch(PAction.addPostLocal(post)))
     .catch(e=>console.log)
);
export const upVotePost = (id) => dispatch => (
  API.votePost(id, 'upVote')
     .then(r=>dispatch(PAction.upVotePostLocal(id)))
     .catch(console.log)
);
export const downVotePost = (id) => dispatch => (
  API.votePost(id, 'downVote')
     .then(r=>dispatch(PAction.downVotePostLocal(id)))
     .catch(console.log)
);
export const deletePost = (id) => dispatch => (
  API.deletePost(id)
     .then(r=>dispatch(PAction.deletePostLocal(id)))
     .catch(console.log)
);

export const fetchComments = (postId) => dispatch => (
  API.fetchComments(postId)
     .then(comments=>{
       const cs = {};
       comments.forEach(c=>cs[c.id]=c);
       dispatch(CAction.receiveComments(cs));
     })
);
export const addComment = (comment) => dispatch => (
  API.addComment(comment)
     .then(r=>dispatch(CAction.addCommentLocal(comment)))
     .then(r=>dispatch(PAction.incrementCommentCount(comment.parentId)))
     .catch(console.log)
);
export const updateComment = (comment) => dispatch => (
  API.updateComment(comment.id, {timestamp: comment.timestamp, body: comment.body})
     .then(r=>dispatch(CAction.addCommentLocal(comment)))
     .catch(console.log)
);

export const upVoteComment = (id) => dispatch => (
  API.voteComment(id, 'upVote')
     .then(r=>dispatch(CAction.upVoteCommLocal(id)))
     .catch(console.log)
);
export const downVoteComment = (id) => dispatch => (
  API.voteComment(id, 'downVote')
     .then(r=>dispatch(CAction.downVoteCommLocal(id)))
     .catch(console.log)
);
export const deleteComment = (id) => dispatch => (
  API.deleteComment(id)
     .then(r=>dispatch(CAction.deleteCommentLocal(id)))
     .catch(console.log)
);
