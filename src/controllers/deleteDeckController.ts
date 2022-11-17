import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findByIdAndDelete(deckId);
  try {
    return res.status(201).json(deck);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
}
