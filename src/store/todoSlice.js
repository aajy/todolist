import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
	const response = await fetch('http://localhost:7000/todos');
	if (response.ok) {
		const todos = await response.json();
		return { todos };
	}
});
const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(newTodo);
		},
		toggleComplate(state, action) {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			if (index !== -1) {
				state[index].completed = action.payload.completed;
			}
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTodosAsync.pending, (state, action) => {
				console.log('fetching data...');
			})
			.addCase(getTodosAsync.fulfilled, (state, action) => {
				console.log('fetched data successfully!');
				return action.payload.todos;
			});
	},
});

export const { addTodo, toggleComplate, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
