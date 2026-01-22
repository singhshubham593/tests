 import React from 'react'
 import { useState } from "react";
 
 const SearchFilter = () => {
 
// Build a Search Filter
// Requirements:   Given array:
// ["Apple", "Banana", "Mango", "Orange"]
// •	Input box
// •	Filter items in real-time
 
  const arr = ["Apple", "Banana", "Mango", "Orange"];
  const [abc, setAbc] = useState("");

  const gets = arr.filter((arr) =>
    arr.toLocaleLowerCase().includes(abc.toLocaleLowerCase()) 
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <input
          type="text"
          placeholder="Search items"
          value={abc}
          onChange={(e) => setAbc(e.target.value)}
        />
        {gets.length > 0
          ? gets.map((item, i) => <li key={i}>{item}</li>)
          : "no"}
      </div>
    </div>
  );

 }
 
 export default SearchFilter;
 