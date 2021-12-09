import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const deleteToken = event => {
		localStorage.removeItem("token");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">SingUp</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-outline-primary" onClick={event => deleteToken()}>
							Log out
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
