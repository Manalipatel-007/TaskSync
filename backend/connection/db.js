const mongoose = require("mongoose");

const connection = async(req, res)=>{
  try {
    await mongoose.connect("mongodb+srv://manali:PB0toUpiNCGnx8Om@cluster0.yzmbq.mongodb.net/").then(()=>{
      console.log("connected");
    })
  } catch (error) {
    res.status(400).json({
      message:"Not Connected"
    });
  }
}

connection();