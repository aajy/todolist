import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const selectTodos = (state) => state.todos;

const selectCompletedTodos = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.completed));

export default function TotalCompleteItems() {
	const completedTodos = useSelector(selectCompletedTodos);
	return <div className='TotalCompleteItems'>Total Complete Task : {completedTodos.length}</div>;
}
