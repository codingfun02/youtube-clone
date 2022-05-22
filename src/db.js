import mongoose from "mongoose";

const handleDBOpen = () => {
  console.log("✅ DB Connected");
};

const handleDBError = (error) => {
  console.log(`❌ DB Error:\n${error}`);
};

mongoose.connect("mongodb://127.0.0.1/youtube-clone");

const db = mongoose.connection;

db.once("open", handleDBOpen);
db.on("error", handleDBError);
