import React from 'react'
import {useEffect, useState} from 'react'


function Employees(){
    const [employees, setEmployees] = useState([{
        name: '',
        surname:'',
        email:'',
        dateHired:''
    }])

    useEffect(() => {
        fetch('/employees').then( res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setEmployees(jsonRes))
    })

    

    return <div className='container'>
        <h2>Employees</h2>
        {employees.map(employee =>
        <div>
            <h2>{employee.name}</h2>
            <p>{employee.content}</p>
            
            
            
        </div>
             )}
    </div>
}

export default Employees