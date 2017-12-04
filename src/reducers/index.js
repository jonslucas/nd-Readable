import { combineReducers } from 'redux';
import { SUBMIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST } from '../actions';

// posts object is keyed on post id
const posts = {};

const comments = {};

function comment (state=comments, action) {
  const {id, comment, postId, author, createTime} = action;

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          postId,
          comment,
          author,
          createTime,
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
  const {id, author, content, createTime } = action;

  switch (action.type) {
    case SUBMIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          author,
          content,
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
