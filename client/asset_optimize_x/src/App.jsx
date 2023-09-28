import { Navigate, Route, Routes } from "react-router-dom";
// import './App.css';
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UserLogin from "./components/user/login/login";
import UserRegister from "./components/user/register/register";

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/user/login" element={<UserLogin />}/>
        <Route path="/user/register" element={<UserRegister/>}/>
        {/* <Route path="/posts/" element={<Posts />} /> */}
        {/* <Route path="/posts/:postId" element={<Post />} /> */}
      </Routes>
    </>
  )
}

export default App
