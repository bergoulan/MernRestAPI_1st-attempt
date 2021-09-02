import React from 'react'
import {useEffect, useState} from 'react'

function Skills(){
    const [skills, setSkills] = useState([{
        title: '',
        description:'',
    }])

    useEffect(() => {
        fetch('/skills').then( res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => setSkills(jsonRes))
    })

    return <div className='container'>
        <h2>Skills</h2>
        {skills.map(skill =>
        <div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
        </div>
             )}
    </div>
}

export default Skills