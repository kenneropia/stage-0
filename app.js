const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const email = process.env.EMAIL;
const githubUrl = process.env.GITHUB_URL;

// Endpoint
app.get("/", (req, res) => {
  const currentDatetime = new Date().toISOString(); // ISO 8601 format (UTC)

  res.status(200).json({
    email,
    current_datetime: currentDatetime,
    github_url: githubUrl,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
