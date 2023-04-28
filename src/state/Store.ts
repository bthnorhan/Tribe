import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import MovieReducer from './MovieSlicer';
import { AppDispatchType } from '@/types';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const moviePersistConfig = {
	key: 'movie',
	storage: AsyncStorage,
	whitelist: ['favoriteMovies'],
};

const rootReducer = combineReducers({
	movie: persistReducer(moviePersistConfig, MovieReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const Store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const PersistorStore = persistStore(Store);

export const useAppDispatch: () => AppDispatchType = useDispatch;
