import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
// Set up MongoDB connection
const mongoURL = process.env.MONGO_URI || 'mongodb+srv://Srajit:Srajit@cluster0.ba4n2.mongodb.net/';
mongoose.connect(mongoURL)
  .then(() => console.log('Mongo DB connection Successful'))
  .catch((err) => console.error('Mongo DB connection Failed: ', err));

// Set a port, default to 5000 if not provided
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => console.log(`Node Server Started using nodemon`));
