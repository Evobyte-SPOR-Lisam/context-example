import React, { useState } from "react";

export default function Child2() {
	const [age, setAge] = useState(0);

	return (
		<div>
			<h1>Child 2</h1>
			<h2>Age: {age}</h2>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}
