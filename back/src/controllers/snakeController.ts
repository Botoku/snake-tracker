import {
  createSnakeEntry,
  findSnakeByOwnerId,
} from "../models/snakeQueries.ts";

const getAllSnakeByOwnerId = async (req, res, next) => {
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

const createSnake = async (req, res, next) => {
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
    console.log(req.body, "req.body")
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

export { getAllSnakeByOwnerId, createSnake };
