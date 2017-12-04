import { combineReducers } from 'redux';
import { SUBMIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST } from '../actions';

// posts object is keyed on post id
const posts = {};

const comments = {};

function comment (state=comments, action) {
  const {id, postId, createTime, body, author, voteScore, parentDeleted} = action;

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          id,
          postId,
          createTime,
          body,
          author,
          voteScore,
          parentDeleted,
          delete: false,
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          delete: true,
        }
      };
    default:
      return state;
  }
}

function post (state=posts, action) {
  const {id, createTime, title, body, author, category, voteScore } = action;

  switch (action.type) {
    case SUBMIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          author,
          title,
          body,
          category,
          voteScore,
          createTime,
          delete: false
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          delete: true
        }
      };
    default:
      return state;
  }
}


export default combineReducers(
  post,
  comment
);
