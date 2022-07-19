import React from 'react'

import {useNavigate} from 'react-router-dom'
function Contactus()
{
  const navigate=useNavigate()
    return(
        <div className='text-center container'>
          <h1>Contact Us at</h1>
          <h2>+91 7981015171</h2>
         {/*link to navigate to users component*/}
        
        </div>
    )

    
}
export default Contactus