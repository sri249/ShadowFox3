const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Simple Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to ShadowFox Backend API");
});

app.post("/add-user", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json({ message: "✅ User saved successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
