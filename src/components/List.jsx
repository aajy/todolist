import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function List() {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className='List'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
}
