import { Router } from "express";
import { getDecksController } from "../controllers/getDecksController";

const router: Router = Router();

router.route("/decks").get(getDecksController);

export default router;
