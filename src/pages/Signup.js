import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios
        .get('http://localhost:9000/register')
        .then((res) => {
            console.log(res.data)
        })
    }

    const handleRegister = (event) =>{
      event.preventDefault()         // this will prevent from refreshing the page after hiting signup button
      axios.post('http://localhost:9000/register',{email , username , password})
      .then(() => {
        alert('Registration Successful')
        setEmail('')
        setUsername('')
        setPassword('')
        fetchUsers()
        navigate('/login')
      })
      .catch ((error) => {
        console.log('Unable to register user')
      }
      )}
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center">
        <form className="text-center border rounded-lg w-[600px] h-[400px] p-9"  onSubmit={handleRegister}>
          {/*Email Input*/}
          <label>Email</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2" 
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label>Username</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2 "
          
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
          <br />
          <br />
          <label>Password</label>
          <br />
          <input className="w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2"
           type='password'
           placeholder='Password'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button className="w-[120px] h-[50px] border hover:bg-teal-900"  type='submit'>
            Signup
          </button>
        </form>
      </div>

      <div className="w-[50%] h-[100%] bg-teal-800  flex justify-center items-center">
        <h2 className="text-3xl text-white">SIGNUP</h2>
      </div>
    </div>
  );
}

export default Signup;
