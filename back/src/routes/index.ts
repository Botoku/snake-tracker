import express from 'express'
import { auth } from '../lib/auth.ts'
import snakeRouter from './snakeRoute.ts'

const routes = express.Router()

routes.use('/snakes', snakeRouter)

export default routes
