// const mongoose = require("mongoose");

// const connection = async(req, res)=>{
//   await mongoose.connect("mongodb+srv://manali:PB0toUpiNCGnx8Om@cluster0.yzmbq.mongodb.net/").then(()=>{
//     console.log("connected")
//   })
// }

// connection();

const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

connectDB();

module.exports = connectDB;
