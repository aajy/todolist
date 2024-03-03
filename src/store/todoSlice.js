import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
console.log('apiEndpoint: ', apiEndpoint);
export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
	const response = await fetch(`${apiEndpoint}/todos`);
	if (response.ok) {
		const todos = await response.json();
		return { todos };
	}
});
export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
	console.log('payload: ', payload);
	const response = await fetch(`${apiEndpoint}/todos`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: payload.title }),
	});
	if (response.ok) {
		const todo = await response.json();
		return { todo };
	}
});
export const toggleCompleteAsync = createAsyncThunk('todos/completeTodoAsync', async (payload) => {
	const response = await fetch(`${apiEndpoint}/todos/${payload.id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ completed: payload.completed }),
	});
	if (response.ok) {
		const todo = await response.json();
		return { id: todo.id, completed: todo.completed };
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
				console.log('state: ', state);
				console.log('fetched data successfully!');
				return action.payload.todos;
			})
			.addCase(addTodoAsync.fulfilled, (state, action) => {
				console.log('state: ', state);
				console.log('action.payload: ', action.payload);
				state.push(action.payload.todo);
			})
			.addCase(toggleCompleteAsync.fulfilled, (state, action) => {
				const index = state.findIndex((todo) => todo.id === action.payload.id);
				if (index !== -1) {
					state[index].completed = action.payload.completed;
				}
			});
	},
});

export const { addTodo, toggleComplate, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
