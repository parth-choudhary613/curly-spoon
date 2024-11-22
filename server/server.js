const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const loginRoutes = require("./routes/login"); // Adjust the path

const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing JSON
app.use("/api/auth", loginRoutes); // Use the login route with /api prefix

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
