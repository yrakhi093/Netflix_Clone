import "./list.scss"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({list}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    // console.log(list._id)
    // console.log(list)


    const listRef = useRef();

    const handleClickLeft = ()=>{
        // setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(slideNumber>0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`  }
            // console.log(slideNumber);
    };

    
    const handleClickRight = ()=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(slideNumber<5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        // console.log(slideNumber);
       
    };

  return (
    <div className='list'>
      <span className="listTitle"  >{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon style={{display: !isMoved && "none", color: "white",
        backgroundColor:" rgb(22,22,22,0.5 )", height: "100%",width: "50px", position:"absolute", left:"0", cursor:"pointer", zIndex: "99" }} onClick={handleClickLeft} />
        <div className="container" ref={listRef}>
          {
            list.content.map((item, i)=>(
              <ListItem key={i} index={i} item={item} /> 

            ))
          }
            
            
        </div> 
        <ArrowForwardIosOutlinedIcon style={{color: "white",
        backgroundColor:" rgb(22,22,22,0.5 )", height: "100%",width: "50px", position:"absolute", right:"0",  top:"0", bottom:"0", margin:"auto", cursor:"pointer", zIndex: "99" }} onClick={handleClickRight}/>

      </div>
    </div>
  )
}

export default List
