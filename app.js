const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv/config')

app.use(express.json());
app.use(cors())

//Import Routes
const employeesRoute = require('./routes/employees')
const skillsRoute = require('./routes/skills')

//Middlewares
app.use('/create' , employeesRoute)
app.use('/employees', employeesRoute)
app.use('/skills', skillsRoute)
app.use('/create-skill', skillsRoute)
app.use('/delete', employeesRoute)





//Routes
app.get('/', (req, res) =>{
    res.send('Home page')
})



//DB connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    () => console.log('DB connected!')

)

//config
app.listen(5050)