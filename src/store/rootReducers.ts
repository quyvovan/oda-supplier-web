import { combineReducers } from '@reduxjs/toolkit'
import { userApi } from 'src/apis/user';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer
