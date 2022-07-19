import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Technologies()
{
    return(
        <div className='text-center container'>
         
         {/* define links for its children */}
         <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active"  to=" ">Html</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="javascript">Javascript</Link>
  </li>
  
</ul>
{/* placeholder to load selected selected component */}
<Outlet/>
<p className=" my-5">Technology ("science of craft", from Greek τέχνη, techne, "art, skill, cunning of hand"; and -λογία, -logia[2]) is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation. Technology can be the knowledge of techniques, processes, and the like, or it can be embedded in machines to allow for operation without detailed knowledge of their workings. Systems (e.g. machines) applying technology by taking an input, changing it according to the system's use, and then producing an outcome are referred to as technology systems or technological systems.

The simplest form of technology is the development and use of basic tools. The prehistoric invention of shaped stone tools followed by the discovery of how to control fire increased sources of food. The later Neolithic Revolution extended this, and quadrupled the sustenance available from a territory. The invention of the wheel helped humans to travel in and control their environment.

Developments in historic times, including the printing press, the telephone, and the Internet, have lessened physical barriers to communication and allowed humans to interact freely on a global scale.</p>
        </div>
    )
}
export default Technologies