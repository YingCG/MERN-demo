const express = require("express")
const cors = require("cors");

const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 8000
const connectDB = require('./config/db')

connectDB()
const app = express()

//add middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/projects', require('./routes/projectRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server stared on port ${port}`))
