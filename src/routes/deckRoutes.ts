import { Router } from "express";
import { createDeckController } from "../controllers/createDeckController";
import { getDecksController } from "../controllers/getDecksController";
import { deleteDeckController } from "../controllers/deleteDeckController";
import { getDeckController } from "../controllers/getDeckController";
import { createCardForDeckController } from "../controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "../controllers/deleteCardOnDeckController";

const router: Router = Router();

router.get("/get", getDecksController);
router.post("/post", createDeckController);
router.delete("/delete/:deckId", deleteDeckController);
router.get("/get/:deckId", getDeckController);
router.post("/post/:deckId/cards", createCardForDeckController);
router.delete("/delete/:deckId/cards/:index", deleteCardOnDeckController);

export default router;
