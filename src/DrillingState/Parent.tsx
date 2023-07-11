import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent() {
	const [age1, setAge1] = useState(0);
	const [age2, setAge2] = useState(0);

	return (
		<div>
			<h1>Parent</h1>
			<p>
				Age of child1 is {age1} and of child2 is {age2}.
			</p>
			<Child1 age={age1} siblingAge={age2} setAge={setAge1} />
			<Child2 age={age2} siblingAge={age1} setAge={setAge2} />
		</div>
	);
}
