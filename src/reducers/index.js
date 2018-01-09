import { combineReducers } from 'redux';
import { SUBMIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST, VOTE_UP_COMM, VOTE_UP_POST, VOTE_DOWN_COMM, VOTE_DOWN_POST } from '../actions';

// posts object is keyed on post id
const postsObj = {
  lkjsS22: {
    id: 'lkjsS22',
    creatTime: 1512483168590,
    title: 'My First Post',
    body: `

Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good meowzer run in circles stare at ceiling. Kitty kitty. Spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce. Man running from cops stops to pet cats, goes to jail stare at guinea pigs or mrow. Dead stare with ears cocked. That box? i can fit in that box chew iPad power cord, so and sometimes switches in french and say "miaou" just because well why not and licks your face spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce knock dish off table head butt cant eat out of my own dish. Ignore the squirrels, you'll never catch them anyway behind the couch, yet meow all night having their mate disturbing sleeping humans, hiding behind the couch until lured out by a feathery toy. Stick butt in face sweet beast, so cough hairball on conveniently placed pants. Sweet beast ooh, are those your $250 dollar sandals? lemme use that as my litter box drink water out of the faucet and fooled again thinking the dog likes me, or attack the dog then pretend like nothing happened.

Eat owner's food attack the dog then pretend like nothing happened. If it smells like fish eat as much as you wish meow to be let in. Purr for no reason instantly break out into full speed gallop across the house for no reason, sleep on keyboard swat turds around the house. You call this cat food cough furball but hack up furballs. Unwrap toilet paper meow all night having their mate disturbing sleeping humans so if it fits, i sits. Jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water purr when being pet play riveting piece on synthesizer keyboard or eat the fat cats food.

`,
    author: 'McTesty',
    category: 'react',
    voteScore: 0,

  },
};

const commentsObj = {};

function comments (state=commentsObj, action) {
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

function posts (state=postsObj, action) {
  const {id, createTime, title, body, author, category, voteScore } = action;

  switch (action.type) {
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
    case VOTE_UP_POST:
      console.log("upVote case")
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
