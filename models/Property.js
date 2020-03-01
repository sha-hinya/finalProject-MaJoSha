const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    property_name: String,
    property_street: String,
    property_postal: String,
    property_city: String,
    property_units: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
