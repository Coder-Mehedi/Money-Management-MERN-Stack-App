const jwt = require("jsonwebtoken");
// const config = require("config")

module.exports = function(req, res, next) {
	// Get the token from header
	const token = req.header("auth_token");

	// check if not token
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}

	try {
		const decoded = jwt.verify(token, process.env.jwtSecret);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "token is not valid" });
	}
};
