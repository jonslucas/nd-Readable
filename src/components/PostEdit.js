import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPost } from '../actions';
import uuidv4 from 'uuid/v4';


const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps.match.params;
  return {
    post: state.posts[postId] || {}
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (post) => dispatch(addPost(post))
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
    const { post, submit } = this.props;
    let { title, author, body, voteScore } = post;
    console.log(JSON.stringify(post, null, 2));

    return (
      <div className='post-input'>
        Add a New Post
        <form>
          <input className='post-input-title' type='text' name='title'
            placeholder='Add A Title' ref={i=>title=i} defaultValue={title} />
          <input className='post-input-author' type='text' name='author'
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
            const p = {
              id: post.id || uuidv4(),
              title: title.value,
              author: author.value,
              body: body.value,
              voteScore: voteScore || 0,
              category: this.state.category,
              createTime: Date.now(),
            };
            console.log(JSON.stringify(p, null, 2));
            submit(p);
            // TODO: Implement redirect to PostDetail view.

          }} > Submit </button>
        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
