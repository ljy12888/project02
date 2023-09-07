const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VSchema = new Schema({
  name: String,
  data: String,
  name_code: String,
  time: String,
});
module.exports = mongoose.model("vdb", VSchema, "vdb");
