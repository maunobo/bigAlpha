// we are not using 'require' statements. 
// When we are using mongoose in a test enviornment, model files will be required into the project multiple times. Mongoose gets confused when the same model is required.

const mongoose = require('mongoose');
const { Schema } = mongoose;
// alternative way
// const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String // Even though the Google ID is a series of numbers, it is wrapped in a String, thus we make use of the type String
});

// Mongoose - to create a new collection of users
// Does not overwritte existing collections, just creates new ones if there are not any
mongoose.model('users', userSchema);