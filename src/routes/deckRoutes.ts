import { Router } from "express";
import { createDeckController } from "../controllers/createDeckController";
import { getDecksController } from "../controllers/getDecksController";
import { deleteDeckController } from "../controllers/deleteDeckController";
import { getDeckController } from "../controllers/getDeckController";
import { createCardForDeckController } from "../controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "../controllers/deleteCardOnDeckController";

const router: Router = Router();

router.get("/decks", getDecksController);
router.post("/decks", createDeckController);
router.delete("/decks/:deckId", deleteDeckController);
router.get("/decks/:deckId", getDeckController);
router.post("/decks/:deckId/cards", createCardForDeckController);
router.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController);

export default router;
