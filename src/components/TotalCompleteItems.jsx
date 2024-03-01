import { useSelector } from 'react-redux';

export default function TotalCompleteItems() {
	const completedTodos = useSelector((state) => state.todos.filter((todo) => todo.completed === true));
	console.log('completedTodos: ', completedTodos);
	return <div className='TotalCompleteItems'>Total Complete Task : {completedTodos.length}</div>;
}
