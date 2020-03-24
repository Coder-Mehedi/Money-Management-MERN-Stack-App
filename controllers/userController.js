const jwt = require("jsonwebtoken");
const User = require("../models/User");
const registerValidator = require("../validator/registerValidator");
const loginValidator = require("../validator/loginValidator");
const bcrypt = require("bcryptjs");
const { serverError } = require("../util/error");

exports.login = async (req, res, next) => {
	const { email, password } = req.body;
	let validate = loginValidator({ email, password });

	if (!validate.isValid) {
		res.status(400).json(validate.error);
	}
	try {
		const user = await User.findOne({ email });
		if (!user) {
			res.status(400).json({
				msg: "User Not Found"
			});
		}
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ msg: "Password isn't match" });
		}
		const token = jwt.sign(
			{
				_id: user._id,
				name: user.name,
				email: user.email
			},
			"SECRET",
			{ expiresIn: "2h" }
		);
		res.status(200).json({
			msg: "Login Successful",
			token: `Bearer ${token}`
		});
	} catch (error) {
		serverError(res, error);
	}
};

exports.register = async (req, res, next) => {
	const { name, email, password, confirmPassword } = req.body;

	let validate = registerValidator({ name, email, password, confirmPassword });

	if (!validate.isValid) {
		res.status(400).json(validate.error);
	} else {
		try {
			let user = await User.findOne({ email });
			if (user) {
				res.status(400).json({
					msg: "Email Already Exists"
				});
			}

			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			res.status(201).json({ msg: "User Created Successfully", user });
		} catch (error) {
			serverError(res, error);
		}
	}
};
