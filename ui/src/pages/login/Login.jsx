
import { useDispatch, useSelector } from 'react-redux'
import  './login.scss';

import {loginStart, loginSuccess, loginFailure, loginStartDp} from "../../components/features/userSlice"
import { publicRequest } from '../../request';
import {   useState } from 'react';
import { Link, Navigate, } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const user = useSelector(state=> state.user.value);
  
  const dispatch = useDispatch();


  const handleClick = async (e)=>{
    e.preventDefault()
    dispatch(loginStart());

    try {
      const res = await publicRequest.post("auth/login", {
        email: email, password: password
      } );
      
      dispatch(loginSuccess(res.data.accessToken));
      dispatch(loginStartDp(res.data.profilePic));
      localStorage.setItem("token", res.data.accessToken );
      if(res.data.accessToken){
        <Navigate to="/"/>
      }
      else{
        <Navigate to="/login"/>
      }
      

      // console.log(res.data)
      
      
      
    } catch (error) {
      dispatch(loginFailure(error.message))
    }
    
  };

 
  
  
    

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
       
        </div>
        </div>
        <div className="container">
            <form >
                <h1>Sign In</h1>
                <input type="email" placeholder='Email or Phone No.' onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleClick}>Sign In</button>
                {user.error && <div className='error'>Sign In Failure:  {user.error}</div>}
                <span  className='signUp'>New to Netflix <Link style={{color: 'inherit', textDecoration:"none"}} to="/register"><b>Sign up now. </b></Link></span>
                <small>
                    This page is protected by google reCAPTCHA to ensure you're not a bot <b>Learn more</b>
                </small>

            </form>

        </div>
    </div>
  )
}

export default Login
