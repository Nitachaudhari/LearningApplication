import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
const App = () => {

  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/lessons' element={<Lessons/>} />
        </Routes>
    
  )
}

export default App