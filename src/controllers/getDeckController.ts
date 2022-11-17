import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
  const { deckId } = req.params;
  const deck = await Deck.findById(deckId);
  try {
    return res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
}
