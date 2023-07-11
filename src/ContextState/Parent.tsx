/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import React from "react";

export interface AgeContextType {
	age1: number;
	age2: number;
	setAge1: React.Dispatch<React.SetStateAction<number>>;
	setAge2: React.Dispatch<React.SetStateAction<number>>;
}

export const AgeContext = React.createContext<AgeContextType>({
	age1: 0,
	age2: 0,
	setAge1: () => {},
	setAge2: () => {},
});

export default function Parent() {
	const [age1, setAge1] = useState(0);
	const [age2, setAge2] = useState(0);

	const reservations = [
		{ user: "vlad", seats: 2, role: "developer" },
		{ user: "mihai", seats: 20, role: "ux" },
		{ user: "ioana", seats: 12, role: "tester" },
	];

	return (
		<div>
			<AgeContext.Provider value={{ age1, age2, setAge1, setAge2 }}>
				<h1>Parent</h1>
				<p>
					Age of child1 is {age1} and of child2 is {age2}.
				</p>
				<Child1 />
				<Child2 />

				<hr></hr>
				<table>
					<tr>
						<th>User</th>
						<th>Seats</th>
						<th>Role</th>
					</tr>
					{reservations.map((reservation) => {
						return (
							<tr>
								<td>{reservation.user}</td>
								<td>{reservation.seats}</td>
								<td>{reservation.role}</td>
							</tr>
						);
					})}
				</table>
			</AgeContext.Provider>
		</div>
	);
}
