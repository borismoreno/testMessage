const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
   userName : { type: String, required: [true, 'User is required'] },
   password : { type: String, required: [true, 'Password is required'] },
});

module.exports = mongoose.model('User', UserSchema);