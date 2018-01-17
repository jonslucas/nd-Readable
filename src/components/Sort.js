import React from 'react'

const Sort = (props) => (
  <div className="sort-select">
    Sort By: <select value={props.currSort} onChange={props.changeSort}>
      <option value="newest" >Newest</option>
      <option value="oldest" >Oldest</option>
      <option value="low" >Lowest Score</option>
      <option value="high" >Highest Score</option>
    </select>
  </div>
);


export default Sort;
