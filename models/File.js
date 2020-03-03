const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fileSchema = new Schema(
  {
    title: String,
    // userId: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    //   }
    // ] ,
    category: String,
    property: String,
    announcedAt: Date,
    unAnnnouncedAt: Date,
    url: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);
const File = mongoose.model("File", fileSchema);
module.exports = File;
