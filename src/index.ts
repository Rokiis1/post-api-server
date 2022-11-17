// import { config } from "dotenv";
// config();
// import mongoose from "mongoose";
// import connectDB from "../src/config/dbConn";
// import createServer from "./config/createServer";

// // Connect to MongoDB
// connectDB();
// const app = createServer();

// const PORT: string | undefined = process.env.PORT;

// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "./controllers/deleteCardOnDeckController";

const PORT = 4000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.get("/decks/:deckId", getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

mongoose.connect(process.env.DATABASE_URI!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
