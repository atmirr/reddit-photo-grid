import { POSTS_LOAD, LOAD_SUCCESS, LOAD_FAIL } from '@actions/posts';
import { hasMorePosts } from '@selectors/posts';

const postsReducer = (
  state = { keywords: {}, error: null, isLoading: false },
  action,
) => {
  switch (action.type) {
    case POSTS_LOAD: {
      const { keyword } = action;
      if (hasMorePosts(keyword)({ posts: state })) {
        return { ...state, error: null, isLoading: true };
      }
      return state;
    }
    case LOAD_SUCCESS: {
      const { keyword } = action;
      const data = action?.posts?.data;
      const items = data?.children?.map((post) => {
        const title = post?.data?.title;
        const thumbnail = post?.data?.thumbnail;
        return { title, thumbnail };
      });
      const lastId = data?.after;
      const lastItems = state?.keywords?.[keyword]?.items || [];
      return {
        keywords: {
          ...state.keywords,
          [keyword]: {
            items: [...lastItems, ...items],
            lastId,
          },
        },
        error: null,
        isLoading: false,
      };
    }
    case LOAD_FAIL: {
      const { error } = action;
      return {
        ...state,
        error: error,
        isLoading: false,
      };
    }
  }
  return state;
};

export default postsReducer;
