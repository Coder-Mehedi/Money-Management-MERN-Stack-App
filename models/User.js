const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	balance: Number,
	income: Number,
	expense: Number,
	transactions: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: "Transaction"
			}
		]
	}
});

module.exports = model("User", UserSchema);
