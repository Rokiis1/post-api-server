import { Request, Response } from "express";
import PostModel from "../models/PostModel";

export const deleteCardOnPostController = async (
  req: Request,
  res: Response
) => {
  const postId = req.params.postId;
  const cardId = req.params.index;
  const post = await PostModel.findById(postId);
  if (!post) return res.status(400).send("no card of this id exists");
  post.cards.splice(parseInt(cardId), 1);
  await post.save();
  res.json(post);
};
