import express from 'express'
import { auth } from '../lib/auth'
import snakeRouter from './snakeRoute'

const routes = express.Router()

routes.use('/snakes', snakeRouter)

export default routes
