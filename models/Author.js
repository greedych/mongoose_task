import mongoose from "mongoose";
import { type } from "os";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
});

const Author = mongoose.model("Author", authorSchema);

export default Author;
