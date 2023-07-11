import React, { useContext, useState } from "react";
import { AgeContextType, AgeContext } from "./Parent";

export default function Child2() {
	const context = useContext<AgeContextType>(AgeContext);
	const age = context.age2;
	const siblingAge = context.age1;
	const setAge = context.setAge2;

	const olderYounger = age > siblingAge ? "older" : "younger";

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
