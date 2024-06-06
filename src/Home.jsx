import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get('http://localhost:3000/tasks')
    .then(result => {
      if (Array.isArray(result.data)) {
          setTodos(result.data)
        }
      })
      .catch(err => console.log(err))

  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/remove/' + id)
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex flex-col w-2/5'>
      <div className='flex items-center'>
        <box-icon name='inbox' type='solid'></box-icon>
        <h2 className='text-2xl font-semibold ml-1'>Tasks ({todos.length})</h2>
      </div>
      <Create />
      {
        todos.length === 0 ?
          <div className='flex justify-center mt-6'><p>No Record</p></div>
          :
          todos.map(todo => (
            <div className='p-2 mt-6 flex flex-col justify-center rounded-lg bg-gray-200' key={todo._id}>
              <div>
                {todo.task}
              </div>
              <div className='flex justify-between text-xs text-gray-500 items-center'>
                {todo.dueDate}
                <div>
                  <i className="bi bi-trash3-fill cursor-pointer ms-3 hover:text-black" onClick={() => handleDelete(todo._id)}></i>
                  <i className="bi bi-pencil-fill cursor-pointer ms-3 hover:text-black"></i>
                </div>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default Home
