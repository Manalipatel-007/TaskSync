const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token valid for 7 days
  });
};

// 🔹 SIGNUP FUNCTION
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // Create a new user
    const newUser = await User.create({ username, email, password });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser.toJSON(),
      token: generateToken(newUser), // Send JWT token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 LOGIN FUNCTION
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    // Compare passwords
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    res.status(200).json({
      message: "Login successful",
      user: user.toJSON(),
      token: generateToken(user), // Send JWT token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
    try {
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error });
    }
};

module.exports = { registerUser, loginUser, logoutUser };
