const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announcementSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: String,
    type: {
      type: String
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    visibility: {
      type: Boolean,
      default: true
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property"
    },
    image: String,
    //default: "https://source.unsplash.com/random"
    announcedAt: String,

    unAnnouncedAt: String
  },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }

  // property: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Property"
  // }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
