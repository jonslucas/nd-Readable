import React from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'


const mapStateToProps = ({posts, comments}, ownProps) => {
  return posts;
}


const PostList = (props) => {
  return (
    <div>
      <h3>Post List Component </h3>

    </div>
  );
}

export default connect(mapStateToProps)(PostList)
