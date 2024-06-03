import React, { useState } from 'react'
import axios from 'axios'
import 'boxicons'


function Create() {

  const [task, setTask] = useState([{}])
  const handleAdd = () => {
    axios.post('http://localhost:3000/add', { task: task })
      .then(result => console.log(result))
      .catch(err => console.log(err))
      window.location.reload()
    }

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter' || e.keyCode === 13){
      handleAdd();
    }
  }

    return (
      <div className='mt-1 text-center w-full'>
      <input className='p-1 outline-0 h-9 w-full bg-gray-100 placeholder-gray-300 rounded-lg' type="text" placeholder='Press enter to add your task' onKeyDown={handleKeyDown} onChange={(e) => setTask(e.target.value)} />
    </div>
  )
  
}




export default Create
