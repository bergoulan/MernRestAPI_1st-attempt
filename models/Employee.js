const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dateHired:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Employees', EmployeeSchema)