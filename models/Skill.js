const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    achievedAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Skills', SkillSchema)