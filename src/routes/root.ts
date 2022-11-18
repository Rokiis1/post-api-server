import { Router } from "express";
import { Request, Response } from "express";
import path from "path";

const router: Router = Router();

router.get("^/$|/index(.html)?", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// router.get("^/$|/404(.html)?", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "..", "views", "404.html"));
// });

export default router;
