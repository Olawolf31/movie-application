import express from 'express'
import morgan from 'morgan'
import dev from './config/index.js'
import connectDB from '../src/config/db.js'


const app = express()
const PORT = dev.app.port

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, async () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
    await connectDB()
})

