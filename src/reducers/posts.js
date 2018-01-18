import * as Types from '../actions/types';

function posts (state={}, action) {
  const {id, timestamp, title, body, author, category, voteScore, posts } = action;

  switch (action.type) {
    case Types.RECEIVE_POSTS:
      return { ...posts };
    case Types.SUBMIT_POST:
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
    case Types.DELETE_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true
        }
      };
    case Types.VOTE_UP_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore+1
        }
      };
    case Types.VOTE_DOWN_POST:
      return {
        ...state,
        [id]: {
          ...state[id],
          voteScore: state[id].voteScore-1
        }
      };
    case Types.INCREMENT_COMMENT:
    return {
      ...state,
      [id]: {
        ...state[id],
        commentCount: state[id].commentCount+1
      }
    }
    default:
      return state;
  }
}

export default posts;
