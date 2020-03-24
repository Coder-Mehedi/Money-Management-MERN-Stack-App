import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
		error: {}
	});
	const { email, password, error } = loginInfo;
	const handleChange = e => {
		setLoginInfo({
			...loginInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
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
							className="form-control"
							placeholder="Enter Your Email"
							email="email"
							id="email"
							name="email"
							value={email}
							onChange={handleChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter Your Password"
							name="password"
							id="password"
							onChange={handleChange}
							value={password}
						/>
					</div>
					<Link to="/register">Don't Have Account? Register Here</Link>
					<button className="btn btn-primary d-block my-3">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
