const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userName: { type: String, required: true, index: true },  // Name of the user making the post
  title: { type: String, required: true, index: true },    // Post title
  description: { type: String, required: true }, // Post description
  createdAt: { type: Date, default: Date.now, index: true } // Timestamp of post creation
});

// Create compound index for sorting posts by date and filtering by user
PostSchema.index({ createdAt: -1, userName: 1 });

module.exports = mongoose.model('Post', PostSchema, 'post');  // ✅ Ensures it's stored in the "post" collection
