const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
const User = require("./user");
const Inquiry = require("./inquiry");
const Tag = require("./tag");

const connectDb = async () => {
  const mongoUrl =
    (process.env.NODE_ENV === "test" && process.env.MONGO_TEST_URL) ||
    process.env.MONGO_URL;
  console.log("Connecting to mongo server: " + mongoUrl);
  return await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const models = { User, Inquiry, Tag };
module.exports = { connectDb, models };
