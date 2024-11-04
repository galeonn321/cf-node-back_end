const mongoose = require("mongoose");

const movieCommentSchema = new mongoose.Schema(
	{
		commentText: {
			type: String,
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		likes: [
			{
				type: String,
			},
		],
	},
	{ _id: false }
);

const MovieComment = mongoose.model("MovieComment", movieCommentSchema);

module.exports = MovieComment;
