import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
