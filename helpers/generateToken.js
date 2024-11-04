const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	try {
		const payload = {
			userId: user.userId,
			username: user.username,
			email: user.email,
		};

		console.log("data stored:", payload);

		const token = jwt.sign(payload, process.env.JWTSECRET, {
			expiresIn: "60d",
		});

		return token;
	} catch (error) {
		console.log("error al generar el token", error.message);
	}
};

const validateToken = (token) => {
	try {
		const statusToken = jwt.verify(token, process.env.JWTSECRET);

		console.log("estado del statusToken al verificarlo:", statusToken);

		return statusToken;
	} catch (error) {
		console.log("error:", error);
	}
};

const renewToken = (token) => {};

module.exports = { generateToken, validateToken };
