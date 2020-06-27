import userReducer from './userReducer'
// import resourceReducer from './resourceReducer';
import { createStore } from 'redux';

export default createStore(userReducer) 