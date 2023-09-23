import express from 'express'
import 'dotenv/config'
import indexRouter from './routers/index'

const app: express.Application = express()
const env = process.env

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(indexRouter)

app.listen(env.SERVER_PORT, () => {
	console.log(`server started in port ${env.SERVER_PORT}`);
})