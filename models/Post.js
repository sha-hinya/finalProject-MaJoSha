const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    _author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },

    image: String,
    title: String,
    content: String,
    type: {
      enum: ["link", "text"],
      type: String
    },
    status: String,
    type: {
      enum: [
        "Open",
        "Accepted",
        "In Progress",
        "Work done",
        "Closed",
        "Declined"
      ],
      type: String
    },
    dueDate: Date,
    archived: Boolean,
    private: Boolean,
    voteCount: Number,
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property"
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    },
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
