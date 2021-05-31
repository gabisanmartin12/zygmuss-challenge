import { handleActions } from 'redux-actions';
import { POSTS_ACTIONS } from '../../actions/posts/posts';

const onRequest = (state) => ({
  ...state,
  error: null,
  isLoading: true,
});

const onError = (state, { payload: { error } }) => ({
  ...state,
  isLoading: false,
  error,
});

const onPosts = (state, { payload: { posts } }) => ({
  ...state,
  error: null,
  isLoading: false,
  page: posts.length > 0 ? state.page + 1 : state.page,
  isThereMore: posts.length === state.limit,
  list: [...state.list, ...posts],
});

const reducerMap = {
  [POSTS_ACTIONS.FETCH_POSTS_REQUEST]: onRequest,
  [POSTS_ACTIONS.FETCH_POSTS_FAILURE]: onError,
  [POSTS_ACTIONS.FETCH_POSTS_SUCCESS]: onPosts,
};

export const defaultState = {
  limit: 10,
  page: 1,
  list: [],
  error: null,
  isLoading: false,
  isThereMore: true,
};

export default handleActions(reducerMap, defaultState);
