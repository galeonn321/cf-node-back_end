// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	profilePicture: {
		type: String,
	},
	comments: [
		{
			movieId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Movie",
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	likes: [
		{
			movieId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Movie",
				required: true,
			},
			date: {
				type: Number,
				default: Date.now,
			},
		},
	],
	savedMovies: [
		{
			movieId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Movie",
				required: true,
			},
			date: {
				type: Number,
				default: Date.now,
			},
		},
	],
	createdAt: {
		type: Number,
		default: Date.now,
	},
	updatedAt: {
		type: Number,
		default: Date.now,
	},
});

userSchema.pre("save", function (next) {
	this.updatedAt = Date.now();
	next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
