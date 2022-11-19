import { Request, Response } from "express";
import PostModel from "../models/PostModel";

export const getPostsController = async (req: Request, res: Response) => {
  const posts = await PostModel.find();
  try {
    return res.status(201).json(posts);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
};
