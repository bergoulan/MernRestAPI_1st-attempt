import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(){
    return <nav className='navbar bg-danger container'>
        <h3><Link className='link' to='/'>Homepage</Link></h3>
        <h3><Link className='link' to='/employees'>Employees</Link></h3>
        <h3><Link className='link' to='/create'>Create Employee</Link></h3>
        <h3><Link className='link' to='/skills'>Skills</Link></h3>
        <h3><Link className='link' to='/create-skill'>Create Skill</Link></h3>

    </nav>
}

export default Navbar