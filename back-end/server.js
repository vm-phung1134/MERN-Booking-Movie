require('dotenv').config()
const {connectDB} = require('./config')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.APP_PORT;
const {errorHandler} = require('./error/errorHandler')

connectDB()
app.use(cors()) // use send req from back to front end
app.use(express.json())

//import route
const authRoute = require('./routes/authRoute')
const ticketRoute = require('./routes/ticketRoute')
const movieRoute = require('./routes/movieRoute')
const cinemaRoute = require('./routes/cinemaRoute')
const showTimeRoute = require('./routes/showTimeRoute')
//mount the route
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/ticket', ticketRoute)
app.use('/api/v1/movies', movieRoute)
app.use('/api/v1/cinemas', cinemaRoute)
app.use('/api/v1/showtimes', showTimeRoute)
//Route not exist
app.all('*', (req, res, next) => {
    const err = new Error('The route can not be found')
    err.statusCode = 404
    next(err)
})
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})