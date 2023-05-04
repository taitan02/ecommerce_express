import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'

const app = express()

//init middlewares
app.use(morgan('dev')) // combined for product
app.use(helmet())
app.use(compression())

//init route
app.get('/', (req, res, next) => {
    return res.status(200).json('Welcome my project')
})
export default app