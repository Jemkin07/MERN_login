import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './components/Login'
import SignupForm from './components/Register'
import Homepage from './components/Homepage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupForm/>}/>
          <Route path='/register' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/homepage' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App