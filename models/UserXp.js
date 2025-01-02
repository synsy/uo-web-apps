const mongoose = require("mongoose");

const UserXpSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // Unique identifier for the user (can be the Discord ID)
      required: true,
      unique: true,
    },
    aspectXpGained: {
      type: Number,
      default: 0,
    },
    chainXpGained: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const UserXp = mongoose.model("UserXp", UserXpSchema);

module.exports = UserXp;
