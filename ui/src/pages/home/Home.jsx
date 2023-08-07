import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

import {userRequest}  from "../../request";

import { useSelector } from "react-redux";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);


  const genre= useSelector((state)=>state.genre.value);


  const token = localStorage.getItem("token");

  // console.log(user.user)

  useEffect(() => {
    const getRandomLists = async()=>{
      
      try {
        const res = await userRequest.get(`lists${type ?  "?type=" + type : ""}${genre ? "&genre=" + genre : "" }`,{headers: {"token": `Bearer ${token}`}} )
        // console.log(res.data)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  
   
  }, [type, genre, token])
  

  return (
    <div className='home'>
      <Navbar />
     <Featured type={type}  />

     {/* {lists.map((list)=>(
      <List list={list} key={list._id}/>
     ))} */}
     {/* <List /> */}


     

     {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    
     
    </div>
  )
}

export default Home
