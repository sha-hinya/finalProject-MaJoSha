const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    status: String,
    private: Boolean,
    image: String,
    title: String,
    content: String,
    status: {
      enum: [
        "open",
        "accepted",
        "in progress",
        "work done",
        "closed",
        "declined"
      ],
      type: String,
      default: "open"
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
    }
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
