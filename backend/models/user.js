const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  image: { type: String },
  places: [{ type: mongoose.Types.ObjectId, ref: 'Place' }],
});

module.exports = mongoose.model('User', userSchema);
