import React, { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

export const SingUp = ({ setVisibility, visibility }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		const res = await fetch(`https://3001-bronze-beetle-ryxs0rfc.ws-eu20.gitpod.io/api/create-user`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name: name,
				email: email,
				password: password
			})
		});

		setVisibility(!visibility);
	}

	return (
		<div className="text-center mt-5">
			<form onSubmit={handleSubmit}>
				<label>Full Name</label>
				<input type="text" onChange={event => setName(event.target.value)} />
				<label>email</label>
				<input type="email" onChange={event => setEmail(event.target.value)} />
				<label>Password</label>
				<input type="password" onChange={event => setPassword(event.target.value)} />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

SingUp.propTypes = {
	visibility: PropTypes.number,
	setVisibility: PropTypes.func
};
