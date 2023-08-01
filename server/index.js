import express from 'express'
import morgan from 'morgan'


const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(4000, () => {
    console.log(`Example app listening at http://localhost:${4000}`)
})