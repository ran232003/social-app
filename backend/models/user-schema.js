import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  impressions: Number,
  viewedProfile: Number,
  occupation: String,
  location: String,
  friends: [],
  picturePath: String,
  password: String,
  email: String,
  lastName: String,
  firstName: String,
});
userSchema.method("transform", function () {
  var obj = this.toObject();

  //Rename fields
  obj.id = obj._id.toString();
  delete obj._id;
  delete obj.__v;

  return obj;
});

const User = mongoose.model("User", userSchema);
export default User;
