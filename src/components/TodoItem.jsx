import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../store/todoSlice';

export default function TodoItem({ id, title, completed, styles }) {
	const dispatch = useDispatch();
	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
	};
	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id: id }));
	};
	return (
		<li className={`${styles.item} ${completed ? styles.success : ''}`}>
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
