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
      type: String,
      default: "Admin"
    },
    visibility: {
      type: Boolean,
      default: true
    },
    image: String,
    //default: "https://source.unsplash.com/random"
    
    announcedAt: {
      type: Date,
      default: Date.now
    },


    unannouncedAt: {
      type: Date,
      default: Date.now
    }
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
