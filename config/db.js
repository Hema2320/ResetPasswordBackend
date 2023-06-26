import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://Hema2320:Hema2320@cluster0.kag8j.mongodb.net/passwordReset"
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
