import mongoose from "mongoose";

const SomeModelSchema = new mongoose.Schema({
  a_string: String,
  a_date: Date,
});

const SomeModel = mongoose.model('SomeModel', SomeModelSchema );

export default SomeModel;
