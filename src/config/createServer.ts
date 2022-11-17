import express, { Application } from "express";
import cors from "cors";
import path from "path";
import deckRoutes from "../routes/deckRoutes";
import { createDeckController } from "../controllers/createDeckController";

function createServer() {
  const router = express();
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

  app.use("/api/v1/decks", deckRoutes);

  router.get("/ping", (req, res, next) =>
    res.status(200).json({ hello: "world" })
  );

  return app;
}

export default createServer;
