import { compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from '../middlewares';

const composer =
  process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

export default composer(middlewares);
