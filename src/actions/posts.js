export const POSTS_LOAD = 'POSTS_LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAIL = 'LOAD_FAIL';

export const loadPosts = (keyword) => ({
  type: POSTS_LOAD,
  keyword,
});

export const setPosts = (posts, keyword) => ({
  type: LOAD_SUCCESS,
  posts,
  keyword,
});

export const setError = (error) => ({
  type: LOAD_FAIL,
  error,
});
