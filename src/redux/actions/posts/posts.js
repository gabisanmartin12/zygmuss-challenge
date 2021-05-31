import { createAction } from 'redux-actions';
import { getPosts } from './../../../services/posts';

export const POSTS_ACTIONS = {
  FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
  FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
};

const fetchPostsRequest = createAction(POSTS_ACTIONS.FETCH_POSTS_REQUEST);

const fetchPostsFailure = createAction(
  POSTS_ACTIONS.FETCH_POSTS_FAILURE,
  (error) => ({
    error,
  })
);
const fetchPostsSuccess = createAction(
  POSTS_ACTIONS.FETCH_POSTS_SUCCESS,
  (posts) => ({
    posts,
  })
);

export const fetchPosts = () => (dispatch, getState) => {
  const {
    posts: { page, limit, isThereMore },
  } = getState();

  if (!isThereMore) return;

  dispatch(fetchPostsRequest());
  getPosts(page, limit)
    .then(({ data }) => dispatch(fetchPostsSuccess(data)))
    .catch(({ message }) => dispatch(fetchPostsFailure(message)));
};
