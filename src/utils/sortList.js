import sortBy from 'sort-by';

const sortList = (arr, sort) => {
  let a = arr.slice();

  switch(sort) {
    case 'high':
      a.sort(sortBy('-voteScore'));
      break;
    case 'low':
      a.sort(sortBy('voteScore'));
      break;
    case 'newest':
      a.sort(sortBy('-timestamp'));
      break;
    case 'oldest':
      a.sort(sortBy('timestamp'));
      break;
    default:
      break;
  }

  return a;
}


export default sortList;
