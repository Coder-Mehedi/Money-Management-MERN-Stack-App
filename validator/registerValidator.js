const validator = require("validator");

const validate = user => {
	let error = {};

	if (!user.name) {
		error.name = "Please Provide Your Name";
	}

	if (!user.email) {
		error.email = "Please Provide Your Email";
	} else if (!validator.isEmail(user.email)) {
		error.email = "Please Provide A Valid Email";
	}

	if (!user.password) {
		error.password = "please provide a password";
	} else if (user.password.length < 6) {
		error.password = "Password must be greater of equal to 6 character";
	}

	if (!user.confirmPassword) {
		error.confirmPassword = "Please Provide Confirmation password";
	} else if (user.password !== user.confirmPassword) {
		error.password = "Password Doesn't Match";
	}

	return {
		error,
		isValid: Object.keys(error).length === 0
	};
};

module.exports = validate;
