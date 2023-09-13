import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import routes from './routes';

dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/api', routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.listen(port, () => console.log(`[server] running on localhost:${port}`))
