import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {'Authorization': 'afjlksdjflk3jlk'}
});

export const fetchCategories = () => ax.get('/categories').then(r=>r.data);
export const fetchCategoryPosts = (cat) => ax.get(`/${cat}/posts`).then(r=>r.data);

export const fetchPosts = () => ax.get('/posts').then(r=>r.data);
export const addPost = (payload) => ax.post('/posts', payload);
export const fetchPost = (postId) => ax.get(`/posts/${postId}`).then(r=>r.data);
export const votePost = (postId,voteState) => ax.post(`/posts/${postId}`, {option: voteState});
export const updatePost = (postId, content) => ax.put(`/posts/${postId}`, content);
export const deletePost = (postId) => ax.delete(`/posts/${postId}`);

export const fetchComments = (postId) => ax.get(`/posts/${postId}/comments`).then(r=>r.data);
export const addComment = (payload) => ax.post('/comments', payload);
export const fetchComment = (commentId) => ax.get(`/comments/${commentId}`).then(r=>r.data);
export const voteComment = (commentId,voteState) => ax.post(`/comments/${commentId}`, {option: voteState});
export const updateComment = (commentId, content) => ax.put(`/comments/${commentId}`, content);
export const deleteComment = (commentId) => ax.delete(`/comments/${commentId}`);
