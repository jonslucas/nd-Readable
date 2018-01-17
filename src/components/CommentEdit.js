import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import uuidv4 from 'uuid/v4';



const CommentEdit = (props) => {
  const { parent, comment, submit } = props;
  let {id, body, author} = comment;

  return (
    <div id="comment-edit" className="comment-container">
      <div>
        <form>
          <input type="text" name="author" placeholder="Sign your name"
              ref={i=>author=i} defaultValue={author} className="input-comment-author" />
          <textarea className="input-comment-body" placeholder="Join the Conversation"
              ref={i=>body=i} defaultValue={body} name="body" spellCheck ></textarea>
          <button className="input-comment-submit" onClick={(e)=>{
            e.preventDefault();
            if (!body.value) body.required=true;
            if (!author.value) author.require=true;
            if (body.value && author.value) {
              const c = {
                id: id || uuidv4(),
                parentId: parent.id,
                body: body.value,
                author: author.value,
                parentDeleted: parent.deleted,
                voteScore: comment.voteScore || 1,
                timestamp: Date.now()
              }
              // console.log(JSON.stringify(c, null, 2));
              submit(c);
              body.value='';
              author.value='';

            }
          }} >Submit</button>
        </form>
      </div>
    </div>
  );
}

const stateMap = ({comments}, ownProps) => {
  const { id } = ownProps;
  return {
    ...ownProps,
    comment: comments[id] || {}
  };


}
const dispatchMap = (dispatch, ownProps) => {
  const {closeModal} = ownProps;
  return {
    submit: (comment) => {
      dispatch(addComment(comment));
      closeModal();
    }
  };
}

export default connect(stateMap, dispatchMap)(CommentEdit)
