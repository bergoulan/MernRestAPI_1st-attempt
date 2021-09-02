import React, {useState} from 'react'
import axios from 'axios'

function CreateSkill(){
    const[input, setInput] = useState({
      title: '',
      description: '', 
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
        const newSkill = {
            title: input.title,
            description:input.description
        }
        axios.post('http://localhost:5050/create-skill', newSkill)
        alert('Skill added succesfully!')
        
    }

    return <div className='container'>
        <h2>Create Skill</h2>
        <form>
            <div className='form-group'>
            <input onChange={handleChange} name='title' value={input.title} autoComplete='off' className='form-control' placeholder='Title'></input>
            </div>
            <div className='form-group'>
            <textarea  onChange={handleChange} name='description' value={input.description} autoComplete='off' className='form-control' placeholder='Description'></textarea>
            </div>
            <button onClick= {handleClick} className='btn btn-lg btn-danger'>Add skill</button>
        </form>
    </div>
}

export default CreateSkill