import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
  const decks = await Deck.find();
  try {
    return res.status(201).json(decks);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
}
