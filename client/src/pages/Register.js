import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Register = () => {
	const {
		register,
		state: { error }
	} = useContext(AuthContext);

	const [registerInfo, setRegisterInfo] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const { name, email, password, confirmPassword } = registerInfo;
	const handleChange = e => {
		setRegisterInfo({
			...registerInfo,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		register({
			name,
			email,
			password,
			confirmPassword
		});
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
							className={
								error.name ? "form-control is-invalid" : "form-control"
							}
							placeholder="Enter Your Name"
							name="name"
							id="name"
							value={name}
							onChange={handleChange}
						/>
						<div className="invalid-feedback">{error.name}</div>
					</div>

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
							type="text"
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

					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="text"
							className={
								error.confirmPassword
									? "form-control is-invalid"
									: "form-control"
							}
							placeholder="Enter Your Confirm Password"
							name="confirmPassword"
							id="confirmPassword"
							onChange={handleChange}
							value={confirmPassword}
						/>
						<div className="invalid-feedback">{error.confirmPassword}</div>
					</div>
					<Link to="/login">Already Have An Account? Login Here</Link>
					<button className="btn btn-primary d-block my-3">Register</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
