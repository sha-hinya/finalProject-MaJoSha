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
    status: {
      enum: [
        "open",
        "accepted",
        "in progress",
        "work done",
        "done",
        "declined"
      ],
      type: String,
      default: "open"
    },
    dueDate: { type: Date, default: Date.now },
    archived: Boolean,
    private: Boolean,
    voteCount: Number
    // property: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Property"
    // }
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
