import React, { useState } from "react";

interface PropsType {
	age: number;
	setAge: React.Dispatch<React.SetStateAction<number>>;
}

export default function Child1(props: PropsType) {
	const age = props.age;
	const setAge = props.setAge;

	return (
		<div>
			<h1>Child 1</h1>
			<h2>Age: {age}</h2>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}
