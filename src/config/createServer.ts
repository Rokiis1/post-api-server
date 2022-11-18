import express, { Application } from "express";
import cors from "cors";
import deckRoutes from "../routes/deckRoutes";
import root from "../routes/root";

function createServer() {
  const app: Application = express();

  app.use(express.urlencoded({ extended: false }));

  // Middleware for json
  app.use(express.json());

  // Cross Origin Resource Sharing
  app.use(
    cors({
      origin: "*",
    })
  );

  // Routes

  app.use("/api/v1/card", deckRoutes);

  app.use("/", root);

  return app;
}

export default createServer;
