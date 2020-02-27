const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const documentSchema = new Schema(
  {
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
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
