import { Request, Response } from "express";
import PostModel from "../models/PostModel";

export const createPostController = async (req: Request, res: Response) => {
  const newPost = new PostModel({
    title: req.body.title,
  });
  const createdPost = await newPost.save();
  try {
    return res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
};
