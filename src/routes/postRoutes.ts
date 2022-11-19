import { Router } from "express";
import { createPostController } from "../controllers/createPostController";
import { getPostsController } from "../controllers/getPostsController";
import { deletePostController } from "../controllers/deletePostController";
import { getPostController } from "../controllers/getPostController";
import { createCardForPostController } from "../controllers/createCardForPostController";
import { deleteCardOnPostController } from "../controllers/deleteCardOnPostController";

const router: Router = Router();

router.get("/posts", getPostsController);
router.post("/posts", createPostController);
router.get("/posts/:postId", getPostController);
router.delete("/posts/:postId", deletePostController);
router.post("/posts/:postId/cards", createCardForPostController);
router.delete("/posts/:postId/cards/:cardId", deleteCardOnPostController);

export default router;
