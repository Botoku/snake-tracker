import express from 'express';
import snakeRouter from './snakeRoute.js';
const routes = express.Router();
routes.use('/snakes', snakeRouter);
export default routes;
//# sourceMappingURL=index.js.map