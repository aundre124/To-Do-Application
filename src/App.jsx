import React, {useEffect, useState} from 'react'
import 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <>
    <div className='flex justify-center'>
    <Routes>
      <Route path="/" element={<Login/>}/>
      {/* <Route path="/view" element={<Home/>} /> */}
      <Route path="/add" element={<Home/>} />
    </Routes>
    </div>
    </>
  )
}

export default App