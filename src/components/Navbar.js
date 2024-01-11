 import React from 'react'
 import { Link , useNavigate } from 'react-router-dom'
 function Navbar() {
  const isUserSignedIn = !!localStorage.getItem('token')

  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
}

   return (
    <nav className='flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300'>
        
       

        <Link >
  <h1 className='text-3xl font-extrabold tracking-tight text-yellow-500 border-b-4 border-yellow-500'>
    <span className="text-yellow-500">FuturisticGPT</span>
  </h1>
</Link>


        <ul className='flex gap-6'>
        {isUserSignedIn ? (
                <>
                <Link to='/account'><li>Home</li></Link>
                <li><button onClick={handleSignOut}>Sign Out</button></li>
                </>
            ) : (
                <>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>Signup</li></Link>
                </>
            )}
        </ul>
     </nav>
   )
 }
 
 export default Navbar