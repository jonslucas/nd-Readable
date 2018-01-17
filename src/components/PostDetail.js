import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Post } from './Post';
import { Comment } from './Comment';
import CommentEdit from './CommentEdit';
import sortBy from 'sort-by';

class PostDetail extends React.Component {
  state={
    commentToEdit: '',
    commentModal: false
  }

  editComment = (id) => {
    this.setState({
      commentToEdit: id,
      commentModal: true
    });
  }
  closeCommentModal = () => {
    this.setState({
      commentModal: false
    });
  }
  render() {
    const {post, comments} = this.props;
    const { commentToEdit, commentModal } = this.state;
    comments.sort(sortBy('-voteScore', 'timestamp'));
    const commView = comments.map(c=><Comment key={c.id} comment={c} edit={this.editComment}/>);
    return (
      <div>
        <Post post={post} />
        <button onClick={()=>this.editComment('')} >Comment</button>
        {commView}

        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={commentModal}
          onRequestClose={this.closeCommentModal}
          contentLabel="Modal"
        >
          {commentModal &&
          <CommentEdit
            parent={post}
            id={commentToEdit}
            closeModal={this.closeCommentModal}
          />}
        </Modal>
      </div>
    );
  }
}


export default connect(({posts, comments},ownProps)=>{

  const { postId } = ownProps.match.params;

  return {
    post: posts[postId],
    comments:Object.keys(comments)
                   .map(ids=>comments[ids])
                   .filter(c=>c.parentId===postId)
                   .filter(c=>!c.deleted||!c.parentDeleted),
    ...ownProps,
  }
})(PostDetail);
