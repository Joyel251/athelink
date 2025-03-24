const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userName: { type: String, required: true },  // Name of the user making the post
  title: { type: String, required: true },    // Post title
  description: { type: String, required: true }, // Post description
  createdAt: { type: Date, default: Date.now } // Timestamp of post creation
});

module.exports = mongoose.model('Post', PostSchema, 'post');  // ✅ Ensures it's stored in the "post" collection
