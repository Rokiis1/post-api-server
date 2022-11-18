import { Router } from "express";
import { createDeckController } from "../controllers/createDeckController";
import { getDecksController } from "../controllers/getDecksController";
import { deleteDeckController } from "../controllers/deleteDeckController";
import { getDeckController } from "../controllers/getDeckController";
import { createCardForDeckController } from "../controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "../controllers/deleteCardOnDeckController";

const router: Router = Router();

router.get("/get/decks", getDecksController);
router.post("/post/decks", createDeckController);
router.get("/get/:deckId", getDeckController);
router.delete("/delete/:deckId", deleteDeckController);
router.post("/post/:deckId/cards", createCardForDeckController);
router.delete("/delete/:deckId/cards/:index", deleteCardOnDeckController);

export default router;
