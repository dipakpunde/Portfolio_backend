import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import {  authroutes } from './routes/index.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())

app.use('/auth',authroutes);


export default app