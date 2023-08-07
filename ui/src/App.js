import "./app.scss"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {
  
  const accessToken = localStorage.getItem("token");
  const token = useSelector(state=> state.user.value);
  // console.log(token.user);

  const Layout = () =>{
    return(
      <div>
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
         
          element:token.user || accessToken ?  <Home/>:<Navigate to="/login"/>
        },
        {
          path:"/login",
         
          element:!accessToken  ? <Login/>:<Navigate to="/"/>
        },
        {
          path:"/register",
       
          element: !accessToken ? <Register/>:<Navigate to="/"/>
        },
        
        
        {
          path:"/watch",
          element: accessToken ? <Watch />:<Login/>
        },
        {
          path:"/movies",
          element:  accessToken ? <Home type="movie" />:<Navigate to="/login"/>
        },
        {
          path:"/series",
          element: accessToken ? <Home type="series"  />:<Navigate to="/login"/>
        },
      ]
    }
  ])
  return (
   
    <RouterProvider router={router}/>
  );
}

export default App;
