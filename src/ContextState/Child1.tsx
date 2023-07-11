import React, { useContext, useState } from "react";
import { AgeContext, AgeContextType } from "./Parent";

export default function Child1() {
	const context = useContext<AgeContextType>(AgeContext);
	const age = context.age1;
	const siblingAge = context.age2;
	const setAge = context.setAge1;

	const olderYounger = age > siblingAge ? "older" : "younger";

	return (
		<div>
			<h1>Child 1</h1>
			<h2>Age: {age}</h2>
			<p>
				My sibling is {siblingAge} years old. I am {olderYounger}.
			</p>
			<button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
		</div>
	);
}
