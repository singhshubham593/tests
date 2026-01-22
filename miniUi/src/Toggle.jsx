// Create a Toggle Button
// Requirements:
// •	Button should switch between:
// o	“ON” (green)
// o	“OFF” (red)
// •	Use useState hook to manage the toggle state

import { useState } from 'react'
function Toggle () {
    const [on,setOn]= useState (false)
  return (
    <div>
        <button  onClick={() => setOn(!on)} className={`px-4 py-2 bg-gray-200 ${on ? "bg-blue-500" : "bg-green-500"}`} > 
            {/* embaded js (` `)in template string is used to change color */}
            {on ? "ON" : "Off"}</button>
      
    </div>
  )
}

export default Toggle