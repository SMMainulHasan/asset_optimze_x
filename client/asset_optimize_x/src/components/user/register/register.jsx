
import axios from "axios";
import { useState } from "react";

const UserRegister = () => {

const data = {name: "", email:"", phone_number:"", password:"", password2:""};
const [userData, setUserData] = useState(data);

const handleData = (e)=>{
    setUserData({...userData, [e.target.name]:e.target.value})
}

const handleSubmit = (e)=> {
    e.preventDefault();
    try{
        axios.post("http://127.0.0.1:8000/api/user/register/", userData)
    }
    catch(err){
        console.log(err.response.data.errors.email[0]);
    }
    
}

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Asset OptimizeX</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input name="name" onChange={handleData} type="text" placeholder="Enter Your Name" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input name="email" onChange={handleData} type="email" placeholder="Email Address" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Phone Number</span>
                    </label>
                    <input name="phone_number" onChange={handleData} type="text" placeholder="Phone" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input name="password" onChange={handleData} type="password" placeholder="Enter Password"
                        className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Conform Password</span>
                    </label>
                    <input name="password2" onChange={handleData} type="password" placeholder="Enter Password"
                        className="w-full input input-bordered" />
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button onClick={handleSubmit} className="btn btn-block">Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserRegister