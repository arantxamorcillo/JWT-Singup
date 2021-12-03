import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import "../../styles/demo.scss";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	async function handleSubmit(event) {
		event.preventDefault();
		const response = await fetch(`https://3001-bronze-beetle-ryxs0rfc.ws-eu21.gitpod.io/api/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password
			})
		});

		const data = await response.json();
		localStorage.setItem("token", data.token);

		history.push("/private");
	}

	return (
		<form>
			<label>email</label>
			<input type="email" onChange={event => setEmail(event.target.value)}></input>
			<label>password</label>
			<input type="password" onChange={event => setPassword(event.target.value)}></input>
			<button onClick={handleSubmit}></button>
		</form>
	);
};
