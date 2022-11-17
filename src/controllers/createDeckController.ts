import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createDeckController(req: Request, res: Response) {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  try {
    console.log(createdDeck);
    return res.status(201).json(createdDeck);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: error,
    });
  }
}
