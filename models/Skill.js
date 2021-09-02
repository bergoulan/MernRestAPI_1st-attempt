const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Skills', SkillSchema)