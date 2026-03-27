import express from 'express'
import { createSnake, getAllSnakeByOwnerId } from '../controllers/snakeController.ts'

const snakeRouter = express.Router()

snakeRouter.get('/:ownerId', getAllSnakeByOwnerId)
snakeRouter.post('/', createSnake)

export default snakeRouter