import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dev from "./config/index.js";
import connectDB from "../src/config/db.js";
import movieRouter from "./routes/movieRoutes.js";
import { errorResponse } from "./utils/responseHandlers.js";
import cors from 'cors'

const app = express();
const PORT = dev.app.port;

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//test route
app.get("/api", (req, res) => {
  res.status(200).send("hemlo");
});

//server side error

app.use((err, req, res, next) => {
  // Handle errors and send responses using errorResponse
  errorResponse(
    res,
    err.statusCode || 500,
    err.message || "Internal Server Error"
  );
});

//movie routes
app.use("/api/movies", movieRouter);

app.listen(PORT, async () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
  await connectDB();
});
