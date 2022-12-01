import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  //check if user exists?
  
  return (
    <div className='bg-slate-800 text-slate-200 w-full h-14 border border-transparent '>
      <div className=' w-[90%] m-auto flex justify-between'>
        <Link to='/'>
          <h2 className='text-xl my-3'>Header</h2> 
        </Link>

        <div className='flex gap-5'>
          <Link to='/'>
            <h3 className='text-xl my-3'>SignUp</h3>
          </Link>
          <Link to='/profile'>
            <h2 className='text-xl my-3'>Profile</h2>  
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar