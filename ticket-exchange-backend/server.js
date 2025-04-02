const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json()); // ✅ Make sure this is added BEFORE defining routes!

// Connect to MongoDB
const mongoURI = "mongodb://127.0.0.1:27017/ticket-exchange"; // Local MongoDB

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB");
}).catch(err => {
    console.error("❌ Error connecting to MongoDB:", err);
});

// Import routes
const userRoutes = require("./routes/userRoutes");  // ✅ Import the userRoutes
app.use("/api/users", userRoutes);  // ✅ Use the user routes

// Import ticket routes
const ticketRoutes = require("./routes/ticketRoutes");  // ✅ Import the ticketRoutes
app.use("/api/tickets", ticketRoutes);  // ✅ Use the ticket routes


// Define a simple route
app.get("/", (req, res) => {
    res.send("Welcome to the Ticket Exchange API!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
