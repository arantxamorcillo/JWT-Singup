import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { useHistory } from "react-router";
import { SingUp } from "../component/signup";
import { LogIn } from "../component/login";

export const Home = () => {
	const [visibility, setvisibility] = useState(true);

	if (visibility) {
		return <SingUp visibility={visibility} setvisibility={setvisibility()} />;
	} else {
		return <LogIn />;
	}
};
