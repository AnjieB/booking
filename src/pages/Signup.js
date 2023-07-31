import axios from 'axios'
import React, { useState } from 'react'

function Signup() {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [photo, setPhoto] = useState(null)


  function handleSubmit(e){
    e.preventDefault()
    let data = new FormData(e.currentTarget)

    axios.post("https://anjieb.pythonanywhere.com/signup/", data)
    .then((response) => {
      if(response.data === 'signup successful'){
        alert("account created");
      }else{
        let error = response.data
        for(let key in error){
          alert(key + " " + error[key]);
        }
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="signup">
      <form className='container' onSubmit={(e) => handleSubmit(e)}>
        <div className="row align-items-center">

          <div className="col-md-6 col-12">
            <label htmlFor="" className="form-label d-block">FirstName</label>
            <input type="text" name="first_name" className="form-control" />
          </div>

          <div className="col-md-6 col-12">
            <label htmlFor="" className="form-label d-block">LastName</label>
            <input type="text" name="last_name" className="form-control" />
          </div>


          <div className="col-md-6 col-12">
            <label htmlFor="" className="form-label d-block">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>

          <div className="col-md-6 col-12">
            <label htmlFor="" className="form-label d-block">Password</label>
            <input type="password" name="password" className="form-control" />
          </div>

          <div className="col-md-6 col-12">
            <label htmlFor="" className="form-label d-block">Photo</label>
            <input type="file" name="photo" className="form-control" />
          </div>
          <div className="col-md-6 col-12 ">
           <button className="btn btn-md btn-success" type="submit">Submit</button>
          </div>


          
        </div>
      </form>
    </div>
  )
}

export default Signup