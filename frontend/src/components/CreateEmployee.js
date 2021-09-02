import React, {useState} from 'react'
import axios from 'axios'

function CreateEmployee(){
    const[input, setInput] = useState({
      name: '',
      surname: '',
      email: '',
      dateHired:''  
    })


    function handleChange(event){
        const {name, value} = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newEmployee = {
            name: input.name,
            surname: input.surname,
            email: input.email,
            dateHired: input.dateHired
        }
        axios.post('http://localhost:5050/create', newEmployee)
        alert('Employee added succesfully!')
        
    }

    return <div className='container'>
        <h2>Create Employee</h2>
        <form>
            <div className='form-group'>
            <input onChange={handleChange} name='name' value={input.name} autoComplete='off' className='form-control' placeholder='Name'></input>
            </div>
            <div className='form-group'>
            <input onChange={handleChange} name='surname' value={input.surname} autoComplete='off' className='form-control' placeholder='Surname'></input>
            </div>
            <div className='form-group'>
            <input onChange={handleChange} name='email' value={input.email} autoComplete='off' className='form-control' placeholder='Email'></input>
            </div>
            <div className='form-group'>
            <input onChange={handleChange} name='dateHired' value={input.dateHired} autoComplete='off' className='form-control' placeholder='Hired date'></input>
            </div>
            <button onClick= {handleClick} className='btn btn-lg btn-danger'>Add employee</button>
        </form>
    </div>
}

export default CreateEmployee