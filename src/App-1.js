import { useState } from 'react';
import './App.css';

function App() {
	const [addOne, setAddOne] = useState(0);
	const [firstName, setFirstName] = useState('');
	const [toggle, setToggle] = useState(false);
	const [list, setList] = useState([
		{ id: 1, todo: 'Walk the cat' },
		{ id: 2, todo: 'Walk the fish' },
		{ id: 3, todo: 'Walk the turtle' },
	]);

	function addItemToList() {
		let newArray = [
			...list,
			{ id: list.length + 1, todo: 'walk more animals' },
		];

		setList(newArray);
	}

	return (
		<div className="App">
			Starting Value: {addOne}
			<button onClick={() => setAddOne(addOne + 1)}>+</button>
			<button onClick={() => setAddOne(addOne - 1)}>-</button>
			<hr />
			<input
				name="firstName"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<button onClick={() => console.log(firstName)}>Submit</button>
			<hr />
			<ul>
				<h3>Input Data</h3>
				<li>FirstName: {firstName}</li>
			</ul>
			<hr />
			{toggle ? <span>Show Me</span> : <span>Don't show me</span>}
			<div>
				<button onClick={() => setToggle(!toggle)}>Toggle</button>
				<button onClick={() => setToggle((firstValue) => !firstValue)}>
					Toggle
				</button>
			</div>
			<hr />
			{list.map((item) => {
				return <div key={item.id}>{item.todo}</div>;
			})}
			<button onClick={addItemToList}>Add to list</button>
		</div>
	);
}

export default App;
