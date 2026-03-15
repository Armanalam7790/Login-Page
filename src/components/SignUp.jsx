import React from 'react'

const SignUp = ({settoogle}) => {
  return (

    <form className="bg-black text-white border rounded p-4 h-fit flex flex-col gap-2 w-[20%] ">
      
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          {/* <p>Join us today</p> */}
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
          <input className="border rounded p-2 w-full" value='Sign in' type="submit" />
        </div>
      
        <span className='text-center'>Don't have an account? <button className='font-semibold text-gray-400/80 cursor-pointer' onClick={()=>{
            settoogle(true)
        }}>sign up</button> </span>

    </form>
   
  )
}

export default SignUp