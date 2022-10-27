import React from 'react'
// import { useNavigate } from 'react-router-dom';
import loginImg from '../../../src/assets/auth/login.svg'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import './loginPage.css'


const Login = () => {
  document.body.style.backgroundColor = "#fff";

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    var user = JSON.parse(sessionStorage.getItem('user'));

    if(loginData.email === user.email && loginData.password === user.password) {
      toast.success("Login Successful!!!")
      setInterval(() => {
        window.location='/Dashboard'
      }, 2000);
    } else {
      toast.error("Wrong email or password.")
    }
  }

  // const navigate = useNavigate();

  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }

  return (
    <section>
       <ToastContainer />      
        <div className="login">
            <div className="login-img">
              <img src={loginImg} alt="" />
            </div>
            <div className="login-form">
              <h1>Welcome Back!</h1>
              <form className='login-form-content' onSubmit={handleSubmit}>
                <input type="email" placeholder='Your Email address' name='email' onChange={handleChange} />
                <input type={state ? "text" : "password"} placeholder='Your Password' name='password' onChange={handleChange} />
                <span onClick={toggleBtn}>
                  {state ? <AiOutlineEyeInvisible /> :
                     <AiOutlineEye />
                  }
                </span>
                <button type="submit" className='login-btn'>LOGIN</button>
                {/* onClick={()=> navigate("/dashboard")} */}
              </form>
              <div className='login-options'>
                <small>Create an account</small>
                <small>Forgot Password</small>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Login