export const getPosts = (keyword) => (state) =>
  state.posts.keywords?.[keyword]?.items;

export const getLastId = (keyword) => (state) =>
  state.posts.keywords?.[keyword]?.lastId;

export const hasMorePosts = (keyword) => (state) =>
  getLastId(keyword)(state) !== null;

export const getError = () => (state) => state.posts.error;

export const getIsLoading = () => (state) => state.posts.isLoading;
