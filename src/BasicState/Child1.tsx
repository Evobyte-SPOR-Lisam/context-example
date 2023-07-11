import React, { useState } from "react";

export default function Child1() {
	const [age, setAge] = useState(0);

	return (
		<div>
			<h1>Child 1</h1>
			<h2>Age: {age}</h2>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}
