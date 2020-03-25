import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Login = props => {
	useEffect(() => {
		if (checkLoggedInOrNot()) {
			props.history.push("/");
		}
	}, []);
	const {
		login,
		state: { error },
		checkLoggedInOrNot
	} = useContext(AuthContext);

	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: ""
	});

	const { email, password } = loginInfo;

	const handleChange = e => {
		setLoginInfo({
			...loginInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		login({ email, password }, props.history);
	};
	return (
		<div className="row">
			<div className="col-md6 offset-md-3">
				<h1 className="text-center display-4">Login Here</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">email</label>
						<input
							type="text"
							className={
								error.email ? "form-control is-invalid" : "form-control"
							}
							placeholder="Enter Your Email"
							email="email"
							id="email"
							name="email"
							value={email}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">{error.email}</div>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className={
								error.password ? "form-control is-invalid" : "form-control"
							}
							placeholder="Enter Your Password"
							name="password"
							id="password"
							onChange={handleChange}
							value={password}
						/>
						<div className="invalid-feedback">{error.password}</div>
					</div>

					<Link to="/register">Don't Have An Account? Register Here</Link>
					{error.msg && (
						<div className="alert alert-danger my-3">
							{error.msg && error.msg}
						</div>
					)}
					<button className="btn btn-primary d-block my-3">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
