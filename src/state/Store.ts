import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import MovieReducer from './MovieSlicer';
import { AppDispatchType } from '@/types';

export const Store = configureStore({
	reducer: {
		movie: MovieReducer,
	},
});

export const useAppDispatch: () => AppDispatchType = useDispatch;
