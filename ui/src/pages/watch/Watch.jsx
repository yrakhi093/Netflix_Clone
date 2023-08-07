import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {  Link, useLocation } from "react-router-dom";



const Watch = () => {
  const location = useLocation();
  // const params = useParams() ;
  // console.log(params);
  console.log(location)

  return (

    <div className="watch">
      <Link to="/">
      <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
      </Link> 
        <video className="video" src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" autoPlay progress controls></video>
      
    </div>
  )
} 

export default Watch
