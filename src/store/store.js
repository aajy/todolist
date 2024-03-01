import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const store = configureStore(
	{
		reducer: {
			todos: todoReducer,
		},
	},
	devToolsEnhancer()
);
