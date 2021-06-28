import React from 'react';

const Allpromise = () => {

	const fethAllpromise = () => {
		const pormiseOne = fetch('https://jsonplaceholder.typicode.com/posts');
		const pormiseTwo = fetch('https://jsonplaceholder.typicode.com/users');

		let allApi = Promise.all([pormiseOne, pormiseTwo]);

		allApi.then(res =>
			res.forEach(resp => myfun(resp.json()))
		).catch(err => console.log(err));
	}

	const myfun = (data) => {
		data.then(val => console.log(val));
	}
	return (
		<div>
			<button onClick={fethAllpromise}>Allpromise</button>
		</div>
	)
}

export default Allpromise;