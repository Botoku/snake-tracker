import type { RequestHandler } from "express";
import {
  createSnakeEntry,
  findSnakeByOwnerId,
} from "../models/snakeQueries.ts";
import { createFeedingEntry } from "../models/feedingQueries.ts";

const getAllSnakeByOwnerId: RequestHandler = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  console.log(ownerId, "ownderID");
  try {
    const snakes = await findSnakeByOwnerId(ownerId);
    console.log(snakes);
    res.status(200).json(snakes);
  } catch (error) {
    next(error);
  }
};

const createSnake: RequestHandler = async (req, res, next) => {
  console.log(req.body, "body");
  try {
    const {
      owner_ids,
      name,
      species,
      morph,
      sex,
      date_of_birth,
      acquisition_date,
      notes,
    } = req.body;
    console.log(req.body, "req.body");
    const result = await createSnakeEntry({
      owner_ids: [...owner_ids],
      name,
      species,
      morph,
      sex,
      date_of_birth,
      acquisition_date,
      notes,
    });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const createFeeding: RequestHandler = async (req, res, next) => {
  try {
    const { snake_id, feeding_date, prey_type, prey_size, quantity, notes } =
      req.body;
    const result = await createFeedingEntry({
      snake_id,
      feeding_date,
      prey_type,
      prey_size,
      quantity,
      notes,
    });
    console.log(result)
    res.status(201).json(result)
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllSnakeByOwnerId, createSnake,createFeeding };
