import { SET_USER, USERS_ERROR } from "../types";

const authReducer = (state, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				user: action.payload.user,
				isAuthenticated: Object.keys(action.payload.user).length !== 0,
				error: {}
			};
		case USERS_ERROR:
			return {
				...state,
				error: action.payload.error
			};
		default:
			return state;
	}
};

export default authReducer;
