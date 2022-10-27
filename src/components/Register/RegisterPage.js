import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import registerImg from '../../../src/assets/auth/register.svg'
import './registerPage.css'

const RegisterPage = () => {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('user', JSON.stringify(signupData));

        toast.success("Sign Up Successful!")
        setInterval(() => {
            window.location='/Login'
        }, 2000);
    }

    document.body.style.backgroundColor = "#fff";
    // const navigate = useNavigate();

    const [state, setState] = useState(false);

    const toggleBtn = () => { 
      setState(prevState => !prevState);
    }

  return (
    <section>
        <ToastContainer />
        <div className="register">
            <div className="register-img">
                <img src={registerImg} alt="" />
            </div>
            <div className="register-form">
                <h1>Welcome to Lilies!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Your First Name' name='name' onChange={handleChange} />
                    <input type="email" placeholder='Your Email Address' name='email' onChange={handleChange} />
                    <input type={state ? "text" : "password"} placeholder='Your Password' name='password' onChange={handleChange} />
                    <span onClick={toggleBtn} className="register-span" >
                        {state ? <small>hide</small>  :
                            <small>show</small>
                        }
                    </span>    
                    <button type="submit" className='login-btn'>SIGN UP</button>
                </form>
                <div className='register-options'>
                    <small>Already have an account. <strong>LOGIN</strong></small>
                </div>
            </div>
        </div>
        {/* onClick={()=> navigate("/dashboard")} */}
    </section>
  )
}

export default RegisterPage