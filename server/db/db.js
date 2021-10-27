const mongoose = require("mongoose");

const dbUrl = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
console.log(dbUrl);

const db = async () => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true }, (con) => {
      console.log(`MongoDB connected`);
      console.log(con);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = db;
