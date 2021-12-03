import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const LogIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		const response = await fetch(`https://3001-bronze-beetle-ryxs0rfc.ws-eu20.gitpod.io/api/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email,
				password: password
			})
		});
		history.pushState("/single");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>email</label>
			<input type="email" onChange={event => setEmail(event.target.value)}></input>
			<label>password</label>
			<input type="password" onChange={event => setPassword(event.target.value)}></input>
			<button type="submit"></button>
		</form>
	);
};
