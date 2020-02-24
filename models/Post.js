/* We'll write the schema and register our model for the posts here */
const mongoose = require("mongoose");

// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: String,
    type: {
      enum: ["link", "text"],
      type: String
    },
    // _author: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // },
    upvote_count: Number
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
