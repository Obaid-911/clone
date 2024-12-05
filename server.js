const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static("public"));
app.use(express.json());

// Sample data for AI models
const models = [
  { id: 1, name: "GPT-X", description: "Advanced language model", price: "$10/month" },
  { id: 2, name: "VisionAI", description: "Computer vision specialist", price: "$15/month" },
  { id: 3, name: "CodeGenie", description: "Code generation expert", price: "$20/month" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for models page
app.get("/models", (req, res) => {
  res.json(models); // Send models data as JSON
});

// Route for contact page
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>Email: support@aimodelshub.com</p>");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
