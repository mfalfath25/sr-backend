// import * as dotenv from 'dotenv'
// dotenv.config({ path: './config/env/.env' })
import appConfig from './config/env'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mainRouter from './routes'
import connectMongo from './config/mongoconnect'
import cors from 'cors'

// Create Express server
const app = express()

// Production environment
const isProduction = process.env.NODE_ENV === 'production'

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json())

// CORS config
app.use(
  cors({
    origin: appConfig.CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    credentials: true,
  })
)

// Headers config
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', appConfig.CLIENT_URL)
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

//https debug
app.use(morgan('dev'))

//Connect Mongo
connectMongo()

app.use('/', mainRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Server is running on isProductionss => ${isProduction}`)
  console.log(`Server is running on PORT ${PORT}`)
})
