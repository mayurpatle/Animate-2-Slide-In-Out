import React  , {useState} from 'react'
import './SlideInOut.css'
const SlideInOut = () => {
    const  [visible   , setVisible   ]  =  useState(false)  ; 
    
  return (
    <div>
        <div className=  {visible  ? 'slide-Out'  :  'normal' } >
            <p>  this  content  will Slide  in  and  out  </p>

        </div>
        <button onClick={() => setVisible(!visible)} className="btn">
            toggle
        </button>
    </div>
  )
}

export default SlideInOut