const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Favorite", FavoriteSchema);
