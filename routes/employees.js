const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')

//main employee page
router.get('/', (req, res) =>{
    res.send('We are on employees')
})

router.get('/specific', (req, res) =>{
    res.send('We are on a specific employee')
})


//creating & saving a new employee
//Creating&Saving a new skill
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



module.exports = router