import { useDispatch } from 'react-redux';
import { toggleComplate, deleteTodo } from '../store/todoSlice';

export default function TodoItem({ id, title, completed }) {
	const dispatch = useDispatch();
	const handleCompleteClick = () => {
		dispatch(toggleComplate({ id: id, completed: !completed }));
	};
	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }));
	};
	return (
		<li className={`item ${completed && 'success'}`}>
			<div>
				<span>
					<input type='checkbox' checked={completed} onChange={handleCompleteClick}></input>
					{title}
				</span>
				<button onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
}
