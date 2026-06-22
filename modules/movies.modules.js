import mongoose, {Schema} from "mongoose";

// Write the Schema
const schema = new Schema({
  name: String,
  discription: String,
});

// Create model
const Movie = mongoose.model("Movie", schema);

export default Movie;