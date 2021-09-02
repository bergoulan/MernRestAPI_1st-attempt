const express = require('express')
const router = express.Router()
const Skill = require('../models/Skill')

//Main skill Page - displaying all the skills
router.get('/', async (req, res) =>{
    try{
        const skills = await Skill.find()
        res.json(skills)
    } catch (err) {
        res.json({ message: err })
    }
})

//Get a specific skill based on ID
router.get('/:skillId', async (req, res) =>{
    try{
        const skill = await Skill.findById(req.params.skillId)
        res.json(skill)
    } catch (err) {
        res.json({ message: err })
    }

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

//Deleting a specific skill based on ID
router.delete('/:skillId', async (req, res) =>{
    try{
        const removedSkill = await Skill.remove({_id: req.params.skillId})
        res.json(removedSkill)
    } catch(err){
        res.json({ message: err })
    }
    
})

//Updating a skill
router.patch('/:skillId', async (req, res) =>{
    try{
        const updatedSkill = await Skill.updateOne(
            { _id: req.params.skillId}, 
            { $set: {title: req.body.title} }
            )
        res.json(updatedSkill)
    } catch (err){
        res.json({ message: err })
    }
    
})



module.exports = router