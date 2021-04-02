const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Defines structure of documents
let lightSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    devEUI: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//Model provides interface by which we communicate with db collection
const Light = mongoose.model("Light", lightSchema);

module.exports = Light;
