import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReduer";
import jwtDecode from "jwt-decode";

import { SET_USER, USERS_ERROR } from "../types";

const AuthContextProvider = props => {
	const initialState = {
		isAuthenticated: false,
		user: {},
		error: {}
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const register = async (user, history) => {
		try {
			const res = await axios.post("/api/users/register", user, {
				headers: {
					"Content-Type": "application/json"
				}
			});
			history.push("/login");
		} catch (error) {
			dispatch({ type: USERS_ERROR, payload: { error: error.response.data } });
		}
	};
	const checkLoggedInOrNot = () => {
		if (localStorage.auth_token) {
			const token = localStorage.auth_token;
			let decode = jwtDecode(token);
			dispatch({ type: SET_USER, payload: { user: decode } });
			return true;
		}
		return false;
	};

	const login = async (user, history) => {
		try {
			const res = await axios.post("/api/users/login", user, {
				headers: {
					"Content-Type": "application/json"
				}
			});
			let token = res.data.token;
			localStorage.setItem("auth_token", token);
			// let decode = jwtDecode(token);
			// dispatch({ type: SET_USER, payload: { user: decode } });
			checkLoggedInOrNot();
			history.push("/");
		} catch (error) {
			dispatch({ type: USERS_ERROR, payload: { error: error.response.data } });
		}
	};

	return (
		<AuthContext.Provider
			value={{ state, register, login, checkLoggedInOrNot }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
