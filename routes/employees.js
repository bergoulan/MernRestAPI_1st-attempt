const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const Skill = require('../models/Skill')

//Main employee Page - displaying all the employees
router.get('/', async (req, res) =>{
    try{
        const employees = await Employee.find()
        res.json(employees)
    } catch (err) {
        res.json({ message: err })
    }
})

//Get a specific employee based on ID
router.get('/:employeeId', async (req, res) =>{
    try{
        const employee = await Employee.findById(req.params.employeeId)
        res.json(employee)
    } catch (err) {
        res.json({ message: err })
    }

})


//creating & saving a new employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        hiredAt: req.body.hiredAt
    })
    try{
        const savedEmployee = await employee.save()
        res.json(savedEmployee)
    } catch (err){
        res.json({ message: err})
    }
    
})

//Deleting a specific employee based on ID
router.delete('/:employeeId', async (req, res) =>{
    try{
        const removedEmployee = await Employee.remove({_id: req.params.employeeId})
        res.json(removedEmployee)
    } catch(err){
        res.json({ message: err })
    }
    
})

//Updating an employee
router.patch('/:employeeId', async (req, res) =>{
    try{
        const updatedEmployee = await Employee.updateOne(
            { _id: req.params.employeeId}, 
            { $set: {name: req.body.name}}
            )
        res.json(updatedEmployee)
    } catch (err){
        res.json({ message: err })
    }
    
})



module.exports = router