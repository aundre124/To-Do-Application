import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Login () {
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const handleUser = (e) =>{
        if (e.key === 'Enter' || e.keyCode === 13){
            sessionStorage.setItem('user', user)
            navigate('/add')
            
        }
      }

    return(
        <>
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className='text-center w-2/5'>
            <p className='text-2xl font-semibold'>Enter your user</p>
            <input id='user' className='p-1 mt-5 outline-0 h-9 w-full bg-gray-100 placeholder-gray-300 rounded-lg' type="text" placeholder='Press enter to confirm' value={user} onChange={(e) => setUser(e.target.value)} onKeyDown={handleUser}/>
            </div>
        </div>
        </>
    )
}

export default Login