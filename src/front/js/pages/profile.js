import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";

import "../../styles/demo.scss";

export const Profile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();
	const token = localStorage.getItem("token");

	useEffect(() => {
		getInfo();
	}, []);

	function handleUdpteName(event) {
		let newName = [...name];
		newName = event;
		setName(newName);
	}

	function handleUdpteEmail(event) {
		let newEmail = [...email];
		newEmail = event;
		setEmail(newEmail);
	}

	function handleUdptePassword(event) {
		let newPassword = [...password];
		newPassword = event;
		setPassword(newPassword);
	}

	async function getInfo() {
		const response = await fetch(`https://3001-bronze-beetle-ryxs0rfc.ws-eu21.gitpod.io/api/private`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		});

		if (response.ok) {
			const data = await response.json();
			setName(data.name);
			setEmail(data.email);
			setPassword(data.password);
		}
	}
	console.log(name);
	async function handleSubmit() {
		let resp = await fetch(`https://3001-bronze-beetle-ryxs0rfc.ws-eu21.gitpod.io/api/update-user`, {
			method: "PUT",
			headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
			body: JSON.stringify({
				name: name,
				password: password,
				email: email
			})
		});
	}

	return (
		<div className="container py-5 h-100">
			<div className="row d-flex align-items-center justify-content-center h-100">
				<div className="col-md-8 col-lg-7 col-xl-6">
					<img
						src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
						className="img-fluid"
						alt="Phone image"
					/>
				</div>
				<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
					<h1>Profile</h1>
					<form>
						<div className="form-outline mb-4">
							<input
								type="text"
								onChange={event => handleUdpteName(event.target.value)}
								id="form1Example13"
								className="form-control form-control-lg"
								value={name}
							/>
							<label className="form-label" htmlFor="form1Example13">
								Full Name
							</label>
						</div>
						<div className="form-outline mb-4">
							<input
								type="email"
								onChange={event => handleUdpteEmail(event.target.value)}
								id="form1Example13"
								className="form-control form-control-lg"
								value={email}
							/>
							<label className="form-label" htmlFor="form1Example13">
								Email address
							</label>
						</div>

						<div className="form-outline mb-4">
							<input
								type="password"
								onChange={event => handleUdptePassword(event.target.value)}
								id="form1Example23"
								className="form-control form-control-lg"
								value={password}
							/>
							<label className="form-label" htmlFor="form1Example23">
								Password
							</label>
						</div>

						<button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
