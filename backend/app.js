import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MongoDB is Conneted"));

    app.listen(5000, () =>
      console.log("Server is listening on port: http://localhost:5000"),
    );
  } catch (err) {
    throw new Error(err);
  }
};

start();
