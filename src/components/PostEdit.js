import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions';
import uuidv4 from 'uuid/v4';


const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps.match.params;
  return {
    post: state.posts[postId] || {}
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (post) => dispatch(addPost(post)),
    update: (post) => dispatch(updatePost(post))
  }
}
class PostEdit extends Component {

  state = {
    category: this.props.post.category || 'react'
  }

  catChange = (e) => {
    this.setState({category: e.target.value});
  }

  render() {
    const { post, submit, update } = this.props;
    let { title, author, body, voteScore } = post;

    return (
      <div className='post-input'>
        Add a New Post
        <form>
          <input className='post-input-title' type='text' name='title'
            placeholder='Add A Title' ref={i=>title=i} defaultValue={title} />
          <input className='post-input-author' type='text' name='author' disabled={post.id?true:false}
            placeholder='Add An Author' ref={i=>author=i} defaultValue={author} />
          <textarea className='post-input-content'
            placeholder='Share Your Thoughts' defaultValue={body}
            name='content' spellCheck ref={i=>body=i} ></textarea>
          <div className='categorySelect'>
            <label>
              <input type='radio' id='cat1' name='category' onChange={this.catChange}
                value='react' checked={this.state.category==='react'} ></input>
                React
            </label>
            <label>
              <input type='radio' id='cat2' name='category' onChange={this.catChange}
                value='redux' checked={this.state.category==='redux'} ></input>
                Redux
            </label>
            <label>
              <input type='radio' id='cat3' name='category' onChange={this.catChange}
                value='udacity' checked={this.state.category==='udacity'} ></input>
                Udacity
            </label>
          </div>

          <button className='post-input-button' onClick={(e)=>{
            e.preventDefault();
            if (!title.value) title.required = true;
            if (!author.value) author.required = true;
            if (!body.value) body.required = true;
            if (title.value && author.value && body.value) {
              const p = {
                id: post.id || uuidv4(),
                title: title.value,
                author: author.value,
                body: body.value,
                voteScore: voteScore,
                category: this.state.category,
                createTime: Date.now(),
              };
              if (!post.id) submit(p);
              else update(p);
              window.location.href = `${window.location.origin}/${p.category}/${p.id}`;

            }

          }} > Submit </button>
        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
