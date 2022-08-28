const express = require("express")

const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()
const app = express()

//add middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/projects', require('./routes/projectRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server stared on port ${port}`))
