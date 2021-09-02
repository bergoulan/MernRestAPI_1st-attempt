import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Employees from './components/Employees'
import CreateEmployee from './components/CreateEmployee'
import Skills from './components/Skills'
import CreateSkill from './components/CreateSkill'

function App() {
return (
<Router>
  <Navbar />

  <Route path='/' exact>
    <Home />
  </Route>

  <Route path='/employees'>
    <Employees />
  </Route>

  <Route path='/create'>
    <CreateEmployee />
  </Route>

  <Route path='/skills'>
    <Skills />
  </Route>
  
  <Route path='/create-skill'>
    <CreateSkill />
  </Route>
</Router>

)}

export default App;
