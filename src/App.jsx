import AddForm from './components/AddForm';
import List from './components/List';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
	return (
		<div className='App'>
			<header>
				<span></span>
				<h1>To-Do List</h1>
				<AddForm />
				<List />
				<TotalCompleteItems />
			</header>
			<section></section>
		</div>
	);
}

export default App;
