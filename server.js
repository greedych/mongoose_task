import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
const app = express();

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || "http://localhost";
const dbURI = process.env.MONGO_URI || "URI";

app.use(express.json());

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Faild connected to MongoDB", error);
  });

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT}`);
});
