import express from 'express'
import { createFeeding, createSnake, getAllSnakeByOwnerId, getAllSnakeFeedings, getSnakeInfo } from '../controllers/snakeController.js'

const snakeRouter = express.Router()

snakeRouter.get('/:ownerId', getAllSnakeByOwnerId)
snakeRouter.post('/feedings/:snakeId', createFeeding)
snakeRouter.get('/feedings/:snakeId', getAllSnakeFeedings)
snakeRouter.post('/', createSnake)
snakeRouter.get('/snake/:snakeId', getSnakeInfo)

export default snakeRouter