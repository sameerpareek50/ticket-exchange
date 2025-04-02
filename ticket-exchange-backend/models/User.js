const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.