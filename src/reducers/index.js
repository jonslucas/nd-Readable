import { combineReducers } from 'redux';
import { SUBMIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST, VOTE_UP_COMM,
         VOTE_UP_POST, VOTE_DOWN_COMM, VOTE_DOWN_POST, RECEIVE_POSTS,
         RECEIVE_COMMENTS } from '../actions';

function comments (state={}, action) {
  const {id, parentId, timestamp, body, author, voteScore, parentDeleted, comments} = action;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {...comments}
    case ADD_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          id,
          parentId,
          timestamp,
          body,
          author,
          voteScore: voteScore || 1,
          parentDeleted,
          deleted: false,
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true,
        }
      };
      case VOTE_UP_COMM:
        return {
          ...state,
          [id]: {
            ...state[id],
            voteScore: state[id].voteScore+1
          }
        };
      case VOTE_DOWN_COMM:
        return {
          ...state,
          [id]: {
            ...state[id],
            voteScore: state[id].voteScore-1
          }
        };
    default:
      return state;
  }
}

function posts (state={}, action) {
  const {id, timestamp, title, body, author, category, voteScore, posts } = action;

  switch (action.type) {
    case RECEIVE_POSTS:
      return { ...posts };
    case SUBMIT_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          id,
          author,
          title,
          body,
          category,
          voteScore: voteScore || 1,
          timestamp,
          deleted: false
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case VOTE_UP_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore+1
        }
      };
    case VOTE_DOWN_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore-1
        }
      };
    default:
      return state;
  }
}


export default combineReducers({
  posts,
  comments,
});
