import React,{ useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import {UserAuth} from '../context/authContext'

function Signup(){
   const [Email,setEmail]=useState('')
   const [Password,setPassword]=useState('')
   const navigate = useNavigate();
   const {User,signUp}=UserAuth()


   const handleSubmit=async (e)=>{
      e.preventDefault()

      try {
         await signUp(Email,Password);
         navigate('/');

      } catch (error) {
         console.log(error);
      }



   }
    return(
        <>
        <div className="w-full h-screen">
          <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
          <div className="bg-black/60 fixd top-0 left-0 w-full h-screen">
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white  " >
                   <div className="max-w-[320px] mx-auto py-16">
                      <h1 className="text-3xl font-bold">Sign Up</h1>
                      <form onSubmit={handleSubmit} className="w-full flex flex-col py-4 " action="">
                        <input onChange={(e)=>setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                        <input onChange={(e)=>setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type='password' placeholder="Password" autoComplete="current-password"/>
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                        <div  className="flex justify-between items-center text-sm text-gray-600">
                           <p>
                              <input  className="mr-2" type="checkbox"  />
                              Remember me
                           </p>
                           <p>Need Help?</p>
                        </div>
                        <p className="py-8">
                           <span className="text-gray-600 "> Already subscribed to NETFLIX?</span>{' '}

                           <Link to='/login'>Sign In</Link>
                          
                        </p>
                      </form>
                   </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Signup;
