import React, { useState } from "react";

interface PropsType {
	age: number;
	siblingAge: number;
	setAge: React.Dispatch<React.SetStateAction<number>>;
}

export default function Child2(props: PropsType) {
	const age = props.age;
	const setAge = props.setAge;
	const siblingAge = props.siblingAge;

	const olderYounger = age > props.siblingAge ? "older" : "younger";

	return (
		<div>
			<h1>Child 2</h1>
			<h2>Age: {age}</h2>
			<p>
				My sibling is {siblingAge} years old. I am {olderYounger}.
			</p>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}
