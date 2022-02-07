import {combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {counterSlice, authSlice} from '@app/features';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: authSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
