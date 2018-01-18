import * as Types from '../actions/types';

function comments (state={}, action) {
  const {id, parentId, timestamp, body, author, voteScore, parentDeleted, comments} = action;
  switch (action.type) {
    case Types.RECEIVE_COMMENTS:
      return {...comments}
    case Types.ADD_COMMENT:
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
    case Types.DELETE_COMMENT:
      return {
        ...state,
        [id]: {
          ...state[id],
          deleted: true,
        }
      };
      case Types.VOTE_UP_COMM:
        return {
          ...state,
          [id]: {
            ...state[id],
            voteScore: state[id].voteScore+1
          }
        };
      case Types.VOTE_DOWN_COMM:
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

export default comments;
