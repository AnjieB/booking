import React, { useEffect, useState } from 'react'
import circle from "./../assets/circle.png"
import axios from "axios"
import { usePaystackPayment } from 'react-paystack'


function Home() {
  const[email, setEmail] = useState("")
  const[option, setOption] = useState("")
  const[amt, setAmt] = useState("")
  const[name, setName] = useState("")
  const[choosen_time, setChoosen_time] = useState("")

  const datas = ["Emergency Case", "Cancer Care", "Heath Query"]

  const [dpt, setDpt] = useState([])


  useEffect(() => {
    axios.get("https://anjieb.pythonanywhere.com/getdepartment/")
      .then((response) => setDpt(response.data))
      .catch((err) => console.log(err))
  }, [])

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amt * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.REACT_APP_APIKEY,
  };

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    axios.post("https://anjieb.pythonanywhere.com/appointment/")({
      name,
      email,
      choosen_time,
      dpt: option,
      reference: reference.reference
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert('closed')
  }

  const initializePayment = usePaystackPayment(config);

  function handleSubmit(e) {
    e.preventDefault()
    let data = new FormData(e.currentTarget)
    let option = data.get("dpt")
    let email = data.get("email")
    let name = data.get("name")
    let choosen_time = data.get("choosen_time")
    

    let result = dpt.find((each) => each.id === option)
    let opinion = window.confirm(`your price is ${result.amount}`)
    setEmail(email)
    setName(name)
    setChoosen_time(choosen_time)
    setAmt(result.amount)
    setOption(option)
    if (opinion === true) {
      initializePayment(onSuccess, onClose)

    } else {
      alert("Oh! Why the change of mind? You can always count on us")
    }
  }

  return (
    <div className="home">
      <h1>

      </h1>
      <div className="banner ">
        <div className="row align-items-center gap-5 gap-md-0">
          <div className="col-md-8 col-12">
            <h2 className='text-white fw-bold fs-1'>Meet The <br /> Best Hospital</h2>
            <h4 className='text-white fs-4'>We Know How Large <br /> Object Will Act</h4>

            <div className="d-flex gap-4">
              <button className='btn btn-md text-white'>Get Quoute Now</button>
              <button className='btn btn-md text-white'>learn more</button>
            </div>
          </div>

          <div className="col-md-4 col-12 bg-white rounded-5">
            <h4 className='text-center p-4'>Book Appointment</h4>
            <form onSubmit={(e) => handleSubmit(e)}>

              <div className="my-3">
                <label htmlFor="" className="form-label d-block fw-bold">Name*</label>
                <input type="text" name='name' placeholder='john Doe' className="form-control" required />
              </div>

              <div className="my-3">
                <label htmlFor="" className="form-label d-block fw-bold">Email Address*</label>
                <input type="email" name='email' placeholder='johndoe@gmail.com' className="form-control" required />
              </div>

              <div className="my-3">
                <label htmlFor="" className="form-label d-block fw-bold">Department*</label>
                <select className="form-control" name='dpt'>
                  <option value="">Please select</option>
                  {dpt.map((item) =>
                    <option value={item.id}>{item.title}</option>)}
                </select>
              </div>

              <div className="my-3">
                <input type= "datetime-local" name='choosen_time' className='form-control' />
              </div>

              <button type='submit' className='btn btn-md btn-primary d-block m-auto mb-3'>Book Appointment</button>
            </form>
          </div>
        </div>
      </div>

      <div className="services text-center p-5">

        <h4>Leading Medicine</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptas!</p>

        <div className="content container mt-3">

          <div className="row gap-md-0 gap-5">
            {
              datas.map((data) => (
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header bg-primary justify-content-center gap-3 d-flex align-items-center">
                      <img src={circle} className='img-fluid' alt="" />
                      <p className='mt-2 text-white'>{data}</p>

                    </div>

                    <div className="card-body">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ex placeat pariatur, labore ea ducimus blanditiis dignissimos libero? At, vitae.
                    </div>
                  </div>
                </div>
              ))
            }


          </div>


        </div>

      </div>


    </div>
  )
}


export default Home