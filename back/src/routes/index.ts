import express from 'express'
import { auth } from '../lib/auth.js'
import snakeRouter from './snakeRoute.js'

const routes = express.Router()

routes.use('/snakes', snakeRouter)

export default routes
