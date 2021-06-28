import React, { useState } from 'react';

const Promiseapi = () => {
	const [user, setUser] = useState([])
	console.log(user);

	const promiseHandler = (e) => {
		e.preventDefault();
		const fetchApiOne = fetch(`https://jsonplaceholder.typicode.com/users`);
		fetchApiOne
			.then((value) => value.json())
			.then(data =>
				data.map((value) =>
					fetch(`https://jsonplaceholder.typicode.com/users/${value.id}`)
						.then(response => response.json())
						.then(ele => setUser({ele}))
						.catch(err => console.log(err))
				)
			).catch(err => console.log(err));
	}

	const promiseAsync = async () => {
		const getApi = await fetch('https://jsonplaceholder.typicode.com/users');
		const response = await getApi.json();
		response.map(async (user) => {
			const getUser = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
			const getUserResponse = await getUser.json();
			setUser(getUserResponse);
		})
	}

	return (
		<div>
			<button onClick={promiseHandler}>Promise	</button>
			<button onClick={promiseAsync}>Async/Await	</button>
			{
				// user.map(value =>
				<ul >
					<li>ID: {user.id}</li>
					<li>Name: {user.name}</li>
					<li>Username: {user.username}</li>
					<li>Email: {user.email}</li>
				</ul>
				// )
			}
		</div>
	)
}

export default Promiseapi