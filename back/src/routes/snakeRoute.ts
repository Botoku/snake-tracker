import express from 'express'
import { createFeeding, createSnake, getAllSnakeByOwnerId, getAllSnakeFeedings } from '../controllers/snakeController.ts'

const snakeRouter = express.Router()

snakeRouter.get('/:ownerId', getAllSnakeByOwnerId)
snakeRouter.post('/feedings/:snakeId', createFeeding)
snakeRouter.get('/feedings/:snakeId', getAllSnakeFeedings)
snakeRouter.post('/', createSnake)

export default snakeRouter