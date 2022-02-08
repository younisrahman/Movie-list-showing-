import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { movieSlice } from '@app/features';

const rootReducer = combineReducers({
  movies: movieSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
