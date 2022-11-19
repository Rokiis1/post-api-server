import { Router } from "express";
import { createDeckController } from "../controllers/createDeckController";
import { getDecksController } from "../controllers/getDecksController";
import { deleteDeckController } from "../controllers/deleteDeckController";
import { getDeckController } from "../controllers/getDeckController";
import { createCardForDeckController } from "../controllers/createCardForDeckController";
import { deleteCardOnDeckController } from "../controllers/deleteCardOnDeckController";

const router: Router = Router();

router.get("/posts", getDecksController);
router.post("/post", createDeckController);
router.get("/post/:postId", getDeckController);
router.delete("/post/:postId", deleteDeckController);
router.post("/post/:postId/cards", createCardForDeckController);
router.delete("/post/:postId/cards/:cardId", deleteCardOnDeckController);

export default router;
