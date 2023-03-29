const mongoose = require("mongoose");

const connect = async () => {
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`mongoDB connected ${DB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
