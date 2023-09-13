import { Router, Request, Response } from 'express';
import productsRouter from './products';

const router: Router = require('express').Router();

router.use('/products', productsRouter);

router.get('/', (req: Request, res: Response) => {
  res.send('Router hit')
})

export default router;
