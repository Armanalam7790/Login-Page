
import React from "react";

const SignIn = ({settoogle}) => {
  return (
    <form className="bg-black text-white border rounded p-4 h-fit flex flex-col gap-2 w-[20%] ">
      
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">Create Account</h1>
          <p className="font-semibold mt-1  text-lg">Join us today</p>
        </div>

        <div className="">
          <label className="p-1 " htmlFor="fullname">Full Name</label>
          <input 
            className="border rounded p-2 w-full" 
            type="text" 
            id="fullname" 
            placeholder="Johan Doe" 
            autoComplete="name"
          />
        </div>

        <div className="">
          <label className="p-2 " htmlFor="Email">Email</label>
          <input 
            className="border rounded p-2 w-full" 
            type="email" 
            id="Email" 
            placeholder="you@example.com" 
            autoComplete="email"
          />
        </div>

        <div className="">
          <label className="p-2" htmlFor="Password">Password</label>
          <input 
            className="border rounded p-2 w-full" 
            type="password" 
            id="Password" 
            placeholder="Password" 
            autoComplete="new-password"
          />
        </div>

        <div className="mt-2">
          <input className="border rounded p-2 w-full" value='Sign up' type="submit" />
        </div>
      
        <span className="text-center">Already Have a Account? <button className='font-semibold text-gray-400/80 cursor-pointer' onClick={()=>{
            settoogle(false)
        }}>sign in</button> </span>

    </form>
  );
};

export default SignIn;
