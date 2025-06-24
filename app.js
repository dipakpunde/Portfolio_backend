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

const origin = 'https://portfolio-frontend-omega-five.vercel.app';

app.use(cors({
  origin,
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.options('*', cors());
app.use(cookieParser())

app.use('/auth',authroutes);


export default app