// const express = require("express");
// const app = express();
// require("./connection/db");

// app.get("/", (req, res)=>{
//     res.send("hello world");
// });

// app.listen(2000, () => {
//     console.log("server is running on port 2000");
// })


require("dotenv").config(); // Load environment variables
require("./connection/db"); // Import DB connection

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Import authentication routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes); // ✅ Register auth routes

app.get("/", (req, res) => {
  res.send("Hello, world! API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
