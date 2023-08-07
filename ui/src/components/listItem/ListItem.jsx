import "./listItem.scss";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { userRequest } from "../../request";




const ListItem = ({index, item}) => {
 

  const [isHovered, setIsHovered] = useState(false);
  const [movies, setMovies] = useState({});

  // const user = useSelector(state=>(state.user.value));
  const token = localStorage.getItem("token");
  

  // console.log(item);
  
  useEffect(() => {
    const getMovie = async ()=>{
      try {


        const res = await userRequest.get("movie/find/" + item, {headers: { "token": `Bearer ${token}`}});

        // console.log(res.data)
        setMovies(res.data);
        
      } catch (error) {
        console.log(error)
      }
    }

    getMovie();
    
  }, [item, token])
  
  // console.log(movies);

  return (
    <Link to={{ pathname: "/watch", movie: movies }}>
    <div 
    className="listItem"
    style={{ left: isHovered && index * 225 -50 + index* 2.5 }}
    onMouseEnter={()=>{setIsHovered(true)}}
    onMouseLeave={()=>{setIsHovered(false)}}

    >
      <img src={movies?.imgSm} alt="" />
      {
        isHovered && (
          <>
          <video src={movies?.trailer} autoPlay={true} loop/>
           <div className="itemInfo">
             <div className="icons">
               <PlayCircleIcon className="icon" />
               <AddIcon className="icon"/>
               <ThumbUpAltOutlinedIcon className="icon" />
               <ThumbDownAltOutlinedIcon  className="icon"/>
             </div>
             <div className="itemInfoTop">
               <span>{movies?.duration}</span>
               <span className="limit">{movies?.limit}</span>
               <span>{movies?.year}</span>
             </div>
             <div className="desc">
               {movies?.desc}
             </div>
             <div className="genre">{movies?.genre}</div>
           </div>
          </>
        )
      }


      {/* <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" /> */}
      

      {/* {
        isHovered && (
          <>
          <video src={trailer} autoPlay={true} loop></video>
           <div className="itemInfo">
             <div className="icons">
               <PlayCircleIcon/>
               <AddIcon/>
               <ThumbUpAltOutlinedIcon/>
               <ThumbDownAltOutlinedIcon/>
             </div>
             <div className="itemInfoTop">
               <span>1 hour 14 mins</span>
               <span className="limit">+16</span>
               <span>1999</span>
             </div>
             <div className="desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatum recusandae obcaecati? Sint nobis cupiditate aut ad, dicta est, dolores tempore commodi atque quas voluptatibus? Molestias, nostrum. Provident perferendis minus neque et!
             </div>
             <div className="genre">Action</div>
           </div>
          </>
        )
      } */}
      
    </div>
    </Link>
    
  )
}

export default ListItem
