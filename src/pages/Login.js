import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    let data = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/login/", data)
    .then((res) => {
      if(res.data === 'invalid email'){
        alert("invalid email");
      }else if(res.data === "invalid credentials"){
        alert("invalid credentials")
      }else{
        let data = res.data
        localStorage.setItem("info", data)
        navigate("/")
      }
    })
    .catch((err) => console.log(err))
  }


  return (
    <div>
     <form className='w-50 position-absolute  top-50 start-50  translate-middle' onSubmit={(e) => handleSubmit(e)}>

        <div>
          <label htmlFor="" className="form-label">Email</label>
          <input type="email" name='email' className="form-control" />
        </div>


        <div>
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" />
        </div>


      <button className="btn-md btn btn-success" type="submit">Login</button>

     </form>
    </div>
  )
}

export default Login