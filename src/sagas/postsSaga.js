import { call, debounce, put, select } from 'redux-saga/effects';
import { fetchTopPosts } from '@api/posts';
import { POSTS_LOAD, setPosts, setError } from '@actions/posts';
import {
  getLastId,
  hasMorePosts as hasMorePostsSelector,
} from '@selectors/posts';

export function* loadPostsHandler(action) {
  try {
    const { keyword } = action;
    const lastId = yield select(getLastId(keyword));
    const hasMorePosts = yield select(hasMorePostsSelector(keyword));
    const hasKeyword = Boolean(keyword);
    if (hasKeyword && hasMorePosts) {
      const topPosts = yield call(fetchTopPosts, keyword, lastId);
      yield put(setPosts(topPosts, keyword));
    } else if (!hasKeyword) {
      yield put(setError(null));
    }
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* postsSaga() {
  yield debounce(500, POSTS_LOAD, loadPostsHandler);
}
