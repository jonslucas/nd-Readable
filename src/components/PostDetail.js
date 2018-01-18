import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Post } from './Post';
import { Comment } from './Comment';
import CommentEdit from './CommentEdit';
import Sort  from './Sort';
import sortList from '../utils/sortList';
import {fetchComments, fetchPost, deleteComment, deletePost } from '../actions';
import './PostDetail.css';




class PostDetail extends React.Component {
  //TODO: add loading animation for this.state.postIsLoading===true;
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
      this.props.getPost(this.props.match.params.postId)
        .then(b=>{
          if (!b) window.location.href = `${window.location.origin}/`;
          else this.setState({postIsLoading: false})
        });
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
      <div className="post-detail-container">
        <Post post={post} remove={deletePost} />
        <div className="post-detail-btns">
          <div>
            <div className="post-detail-comment-btn nav-btn" onClick={()=>this.editComment('')} >Comment</div>
          </div>
          <div className="post-detail-sort">
            <Sort currSort={sortComm} changeSort={this.changeSort} />
          </div>
        </div>
        <div className="post-detail-comment-list">
            {commView}
        </div>


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
