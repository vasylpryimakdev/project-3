import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/user", userRouter);

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
