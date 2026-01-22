import React from 'react'
    import { useState } from "react";

const ShowHide = () => {
 
// Create a Show/Hide Password Feature
// Requirements:
// •	Password input
// •	Eye icon/button to toggle hide/unhide

 
  const [so, setSo] = useState(false);
  const handleSo = (e) => {
    setSo(!so);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <input
          type="text"
          placeholder="Password"
          value={so ? "text" : "password"}
          onChange={(e) => setSo(e.target.value)}
        />
        <button onClick={handleSo}>{so ? "show" : "Hide"}</button>
        <h1>{so}</h1>
      </div>
    </div>
  );
}

export default ShowHide
