import express from 'express'
import { createFeeding, createSnake, getAllSnakeByOwnerId } from '../controllers/snakeController.ts'

const snakeRouter = express.Router()

snakeRouter.get('/:ownerId', getAllSnakeByOwnerId)
snakeRouter.post('/:snakeId', createFeeding)
snakeRouter.post('/', createSnake)

export default snakeRouter