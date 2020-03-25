import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Home = props => {
	useEffect(() => {
		if (!checkLoggedInOrNot()) return props.history.push("/login");
	}, []);

	const {
		state: { error },
		checkLoggedInOrNot,
		logout
	} = useContext(AuthContext);

	return (
		<div>
			<h1>Home</h1>
			<button className="btn btn-info" onClick={() => logout(props.history)}>
				Logout
			</button>
		</div>
	);
};

export default Home;
