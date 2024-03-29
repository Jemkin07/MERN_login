import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios.post("http://localhost:4000/register",{email, password})
      .then(result=>{
        console.log(result);
        if(result.data === 'already registered'){
            alert("E-mail already registered!! Please log in to proceed")
            navigate('/login')
        }
        else{
            alert("sucessfully registered ")
            navigate("/login")
        }
      })
      .catch(err=>console.log(err))
    };
  
    return (
      <div className="max-w-sm mx-auto mt-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  };

  export default SignupForm