import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReduer";

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

	return (
		<AuthContext.Provider value={{ state, register }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
