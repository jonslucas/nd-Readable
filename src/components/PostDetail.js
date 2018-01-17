import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Post } from './Post';
import { Comment } from './Comment';
import CommentEdit from './CommentEdit';
import Sort  from './Sort';
import sortList from '../utils/sortList';
import {fetchComments, fetchPost, deleteComment, deletePost } from '../actions';

//TODO: add loading animation for this.state.postIsLoading===true;
//TODO: redirect to 404 if no post found for this id

class PostDetail extends React.Component {
  state={
    commentToEdit: '',
    commentModal: false,
    postIsLoading: true,
    sortComm: 'high'
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
  changeSort = (e) => this.setState({sortComm: e.target.value})
  componentWillMount() {
    if (!this.props.post) {
      this.props.getPost(this.props.match.params.postId).then(b=>this.setState({postIsLoading: false}));
      this.props.getComments(this.props.match.params.postId);
    } else {
      this.setState({postIsLoading: false});
      this.props.getComments(this.props.post.id);
    }

  }
  render() {
    const {post, comments, deleteComment, deletePost} = this.props;
    const { commentToEdit, commentModal, postIsLoading, sortComm } = this.state;
    const cs = sortList(comments, sortComm);
    const commView = cs.map(c=><Comment key={c.id} comment={c} edit={this.editComment} remove={deleteComment}/>);
    return ( !postIsLoading &&
      <div>
        <Post post={post} remove={deletePost} />
        <button onClick={()=>this.editComment('')} >Comment</button>
        <Sort currSort={sortComm} changeSort={this.changeSort} />
        {commView}

        <Modal
          className="modal"
          overlayClassName="overlay"
          isOpen={commentModal}
          onRequestClose={this.closeCommentModal}
          contentLabel="Modal"
          ariaHideApp={false}
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
                   .filter(c=>!c.deleted),
    ...ownProps,
  }
}, {
  getComments: fetchComments,
  getPost: fetchPost,
  deleteComment,
  deletePost,
 })(PostDetail);
