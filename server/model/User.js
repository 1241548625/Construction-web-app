import mongoose from "mongoose";

//create user schema
const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  LastName: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//when create user, 1. create userSchema 2. pass it into User
const User = mongoose.model("User", UserSchema);

export default User;
