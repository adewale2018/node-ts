import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import mongoose from "mongoose";

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("CONNECTED TO DB::successfully");
  } catch (error) {
    console.log("Failed to connect to DB");
    process.exit(1);
  }
};

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  connection();
  console.log("server listening on http://localhost:8080");
});
