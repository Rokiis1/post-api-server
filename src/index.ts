import { config } from "dotenv";
config();
import mongoose from "mongoose";
import connectDB from "../src/config/dbConn";
import createServer from "./config/createServer";

// Connect to MongoDB
connectDB();
const app = createServer();

const PORT: string | undefined = process.env.PORT;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
