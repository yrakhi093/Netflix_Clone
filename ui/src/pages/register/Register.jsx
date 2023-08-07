import { useRef, useState } from 'react'
import  './register.scss'
import { Link } from 'react-router-dom';
import { publicRequest } from '../../request';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [data, setData] = useState("");

    const emailRef = useRef();

    const handleStart =()=>{
        setEmail(emailRef.current.value)
    };
  

   const handleRegister = async(e)=>{

    e.preventDefault()
    try {
      const res = await publicRequest.post("auth/register", {
        email: email, password: password, username: username
      });

      setData(res.data)

      // console.log(res.data)

      // navigate("/login");
    } catch (error) {
      
    }
   }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
       {!data && <Link  style={{ textDecoration:"none", color:"inherit"}}to="/login">
        <button className='signInButton'>Sign in</button> 
        </Link>}
        
        </div>
        </div>
        <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.   
        </p>
        {
            !email ? (<div className="input">
            <input type="email" ref={emailRef} placeholder='email address' />
            <button className='registerButton' onClick={handleStart}>Get Started</button>
        </div>):(
          <>
          {!data &&
          <form className="input">
          <input type="name" onChange={e=>setUsername(e.target.value)} placeholder='username' />
          <input type="password" onChange={e=>setPassword(e.target.value)} placeholder='password' />
       
          <button className='registerButton' onClick={handleRegister}>Register </button> 
         </form>
          }
          

            {data &&
            <div className='finalRegPage'>
             <h2>Registered Successfully! You can login now</h2>
               <Link  style={{ textDecoration:"none", color:"inherit"}}to="/login">
               <button className='signInButton'>Sign in</button> 
               </Link>
            </div>}
          </>
        
            
      
        )
        }
        
        </div>
    </div>
  )
}

export default Register
