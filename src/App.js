import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
	return (
		<div className="App m-4">
			<TodoInput />
      		 <TodoList />
			
		</div>
	);
};

export default App;