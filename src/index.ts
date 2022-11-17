import { config } from "dotenv";
config();
import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import connectDB from "../src/config/dbConn";
import deckRoutes from "./routes/deckRoutes";

const app: Application = express();

// Connect to MongoDB
connectDB();

// Cross Origin Resource Sharing
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: false }));

// Middleware for json
app.use(express.json());

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "src", "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Routes

app.use("/api/v1/card", deckRoutes);

const PORT: string | undefined = process.env.PORT;
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
