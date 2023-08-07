import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from "react";
import { userRequest } from "../../request";

import {  useDispatch, useSelector } from 'react-redux';
import {genreFeatured } from '../features/genre'
import { Link } from "react-router-dom";

const Featured = ({type }) => {
  const [contnet, setContnet] = useState({});
  const dispatch = useDispatch();

  const options = useSelector(state=>(state.options.value));

  const token = localStorage.getItem("token");


  useEffect(() => {
    const getRandomContent = async ()=>{
      try {
        
        const res = await userRequest.get(`movie/random?type=${type}`, { headers: {"token": `Bearer ${token}`}});
       
        // console.log(res.data)
        setContnet(res.data[0])
        // console.log(res.data)
      } catch (error) {


        console.log(error)
      }
    };
    getRandomContent();
  }, [type, token]);
  

  // console.log(contnet);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          
          <select placeholder="Genre" name="genere" id="genere" onChange={(e) => dispatch(genreFeatured(e.target.value))}>
        
            <option>{options[0]}</option>
            <option value="documentry">{options[1]}</option>
            <option value="comedy">{options[2]}</option>
            <option value="action">{options[3]}</option> 
            <option value="horror">{options[4]}</option>   
            <option value="crimeThriller">Crime Thriller</option>
            {/* <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="historical">Historical</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option> */}
            
          </select>
        </div>

      )}
      <img  src={contnet?.img} alt="" />
      <div className="info">
        <img className="titleImg"src={contnet?.imgTitle} alt="" />
        <span className="desc">
            {contnet?.desc}
        </span>
        <div className="buttons">
            <button className="play">
              <Link to="/watch" className="link">
              <PlayArrowIcon/>
              </Link>
             
                <span className="playText">Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
