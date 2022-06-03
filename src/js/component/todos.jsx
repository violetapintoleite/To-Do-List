import React, { useState } from "react";

//include images into your bundle

//create your first component
const Todos = () => {
	const [list, setList] = useState([]);

	const [value, setValue] = useState("");
	const addToList = () => {
		let tempArr = list;
		tempArr.push(value);
		setList(tempArr);
		setValue("");
	};

	const deleteItem = (index) => {
		let temp = list.filter((item, i) => i !== index);

		setList(temp);
	};

	return (
		<div className="App">
			<div class="input-group mb-3">
				<input
					class="form-control"
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>{" "}
				<button class="btn btn-outline-secondary" onClick={addToList}>
					{" "}
					Click to Add{" "}
				</button>
			</div>

			<ul class="list-group list-group-flush">
				{list.length > 0 ? (
					list.map((item, i) => (
						<li
							id="task"
							className="list-group-item list-group-item-action">
							{item}
							<button
								className="btn-close"
								onClick={() => deleteItem(i)}></button>
						</li>
					))
				) : (
					<p>No tasks, add a task</p>
				)}
			</ul>
		</div>
	);
};
export default Todos;
