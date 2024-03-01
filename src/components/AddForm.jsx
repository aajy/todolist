import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export default function Input() {
	const [task, setTask] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addTodo({
				title: task,
			})
		);
	};

	return (
		<form className='Input' onSubmit={onSubmit}>
			<input type='text' placeholder='Add task' value={task} onChange={(e) => setTask(e.target.value)} />
			<button type='submit'>add task</button>
		</form>
	);
}
