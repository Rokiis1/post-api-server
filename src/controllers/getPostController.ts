import { Request, Response } from "express";
import PostModel from "../models/PostModel";

export const getPostController = async (req: Request, res: Response) => {
  const { postId } = req.params;
  const post = await PostModel.findById(postId);
  try {
    return res.status(201).json(post);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
};
