//for backend environment
import express from "express";
//for mongoose database
import mongoose from "mongoose";
//to store sensetitve information
import dotenv from "dotenv";
import bodyParser from "body-parser";
//route
import submitRoute from "./routes/submit.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Access environment variables
const PORT = process.env.PORT || 3000;
const Mongoose = process.env.MONGO_URL;

//handle form submission
app.use("/api", submitRoute);

mongoose
  .connect(Mongoose, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Erro connecting to database: ", err);
  });

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
