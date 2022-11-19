import { Request, Response } from "express";
import PostModel from "../models/PostModel";

export const createCardForPostController = async (
  req: Request,
  res: Response
) => {
  const postId = req.params.postId;
  const post = await PostModel.findById(postId);
  if (!post) return res.status(400).send("no cards of this id exists");
  const { text } = req.body;
  post.cards.push(text);
  await post.save();
  console.log(post);
  res.json(post);
};
