//  Build a Controlled Input
// Requirements:
// •	Input field
// •	Display real-time typed text below
// •	Add “Clear” button


import { useState } from "react";
function ControlInp(){
    const [ins,SetIn]=useState("")
    const handleInput =(e) => {
       
        SetIn(e.target.value )
    }
    return<>
    <input 
    type="text"
    placeholder="Enter text"
    className="text-lx bold border-2  px-2 py-1 rounded-md mt-4"
    value={ins}
    onChange={handleInput}
    />
        <h1 className="  px-4 py-4 bold">{ins}</h1>
    <button onClick={()=> SetIn("")} className="px-4 py-2 bg-red-500 text-white rounded-lg">Clear </button>
 
    </>

}
export default ControlInp;