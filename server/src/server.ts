import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser'
import routes from './routes';


async function server() {
  dotenv.config()

  const app: Application = express()
  const port = process.env.PORT || 3000
  
  await mongoose
          .connect('mongodb://localhost:27017/testdb')
          .then(() => console.log('[db] connection to MongoDB successful.'))
          .catch((err: Error) => { console.log('MongoDB connection error: ', err)});
  
  app.use(bodyParser.json())
  
  app.use('/api', routes)
  
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
  })
  
  app.listen(port, () => console.log(`[server] running on http://localhost:${port}`))
}

server()
