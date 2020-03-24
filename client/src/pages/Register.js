import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [registerInfo, setRegisterInfo] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		error: {}
	});
	const { name, email, password, confirmPassword, error } = registerInfo;
	const handleChange = e => {
		setRegisterInfo({
			...registerInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
	};
	return (
		<div className="row">
			<div className="col-md6 offset-md-3">
				<h1 className="text-center display-4">Register Here</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter Your Name"
							name="name"
							id="name"
							value={name}
							onChange={handleChange}
						/>
					</div>

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

					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter Your Confirm Password"
							name="confirmPassword"
							id="confirmPassword"
							onChange={handleChange}
							value={confirmPassword}
						/>
					</div>
					<Link to="/login">Already Have An Account? Login Here</Link>
					<button className="btn btn-primary d-block my-3">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
