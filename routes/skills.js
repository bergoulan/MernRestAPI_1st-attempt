const express = require('express')
const router = express.Router()
const Skill = require('../models/Skill')

//Main skill Page
router.get('/', (req, res) =>{
    res.send('We are on skills')
})

//Creating&Saving a new skill
router.post('/', async (req, res) => {
    const skill = new Skill({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedSkill = await skill.save()
        res.json(savedSkill)
    } catch (err){
        res.json({ message: err})
    }
    
})



module.exports = router