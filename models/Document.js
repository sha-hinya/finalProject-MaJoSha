const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  title: String,
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  category: String,
  property: [],
  url: String
});

const Document = mongoose.model("Document", documentSchema);

module.exports = Post;
