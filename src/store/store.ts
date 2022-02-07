import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import rootReducer, {RootState} from './root-reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...(__DEV__ ? [logger] : []),
  ...getDefaultMiddleware({serializableCheck: false}),
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: __DEV__,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, persistor};
