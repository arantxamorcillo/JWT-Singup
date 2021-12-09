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

		history.push("/profile");
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
					<form>
						<div className="form-outline mb-4">
							<input
								type="email"
								onChange={event => setEmail(event.target.value)}
								id="form1Example13"
								className="form-control form-control-lg"
							/>
							<label className="form-label" htmlFor="form1Example13">
								Email address
							</label>
						</div>

						<div className="form-outline mb-4">
							<input
								type="password"
								onChange={event => setPassword(event.target.value)}
								id="form1Example23"
								className="form-control form-control-lg"
							/>
							<label className="form-label" htmlFor="form1Example23">
								Password
							</label>
						</div>

						<button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg btn-block">
							Log in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
