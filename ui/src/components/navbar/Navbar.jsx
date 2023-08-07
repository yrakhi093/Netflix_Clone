import "./navbar.scss"
// import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { genreHome } from '../features/genre';
// import { finalValue } from '../features/optionSlice';
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/userSlice";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const reducer = (state,action)=>{
  switch(action.type){
    case"homeClick":
    return {movies:"white", series:"white", home:"red"}
    case"moviesClick":
    return {series:"white", home:"white", movies:"red"}
    case"seriesClick":
    return {home:"white", movies:"white", series:"red"}
    default:
      return state;
  }
}

const Navbar = () => {

  const initialState = {
    home:"white", movies:"white", series:"white"
  }
    const [state, dispatcha] = useReducer(reducer, initialState );

    const [isScrolled, setIsScrolled] = useState(false);
    const dispatch = useDispatch();
   
    const [profile, setProfile] = useState(true);
    // const [colors, setColors] = useState('white');
    
   

   const Dp = useSelector(state=>state.user.value)

  //  console.log(Dp.userDp);
    const handleClick = (e)=>{
      e.preventDefault()
      dispatch(logOut(localStorage.removeItem("token")));
      // navigate("/login")
    
    }


    

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false : true );
        return () => (window.onscroll = null);
    };

    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"} >
      <div className="containerNav">
        
        
        <div className="left">

          
            <Link to="/" className="link">
            <span className="leftNav" onClick={()=>{dispatch(genreHome())}}>Homepage</span>
            </Link>
            <Link to="/series" className="link">
            <span className="leftNav" onClick={()=>{dispatch(genreHome())}}>Series</span>
            </Link>
            <Link to="/movies" className="link">
            <span className="leftNav" onClick={()=>{dispatch(genreHome()) }}>Movies</span>
            </Link>
            <span className="leftNav" >New and Popular</span>
            <span className="leftNav" >My List</span>
        </div>

        
        <div className="right">
            <SearchIcon className="icons"/>
      
            <NotificationsNoneIcon className="icons"/>
           
            <div className="profile">
            <img className="imgProf" src= {Dp ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" :Dp.userDp  } alt=""  />
                 <div className="options">
                    <span>Settings</span>
                    <span onClick={handleClick} >Logout</span>   
                  </div>
              </div> 
             

            {profile?

           (<div className="densityIcon">
            <DensityMediumIcon onClick={()=>(setProfile(false))} />
            
           </div>)
           :
           
           <>
           
              <div className="sidebarList" >
                <Link className="link" to="/">
                <div onClick={()=> (dispatcha({type:"homeClick"}),dispatch(genreHome()))} style={{color:state.home}}>Homepage</div>
                </Link>
                <Link  className="link" to="/series">
                <div  onClick={()=> (dispatcha({type:"moviesClick"}),  dispatch(genreHome()))} style={{color:state.movies}}>Series</div>
                </Link>
                <Link  className="link" to="/movies">
                <div  onClick={()=> (dispatcha({type:"seriesClick"}) , dispatch(genreHome()))} style={{color:state.series}}>Movies</div>
                </Link>
              
              
              </div> 
            </>
           }
           
        </div>

      </div>
    </div>
  )
}

export default Navbar
