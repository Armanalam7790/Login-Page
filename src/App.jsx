import React from 'react'
import { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => {

  const [toogle, settoogle] = useState(true)
  return (
    <div className='w-screen h-screen bg-black text-white flex justify-center items-center'>
      {/* <h1 className='bg-red-700 p-4'>hello</h1> */}

      {toogle? <SignIn settoogle={settoogle} /> : <SignUp settoogle={settoogle} />}
    </div>
  )
}

export default App