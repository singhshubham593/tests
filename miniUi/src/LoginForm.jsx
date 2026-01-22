import React from 'react'

//  Build a Simple Login Form
// Requirements:
// •	Email and password inputs
// •	Validate: fields must not be empty
// •	Show "Login Successful" on submit


const LoginForm = () => {
  return (
    <>
      <input type="text" />
    </>
  )
}

export default LoginForm


// import "./styles.css";
// import { useState } from "react";

// // Build a Simple Login Form
// // Requirements:
// // •	Email and password inputs
// // •	Validate: fields must not be empty
// // •	Show "Login Successful" on submit

// export default function App() {
//   const [em, setEm] = useState("");
//   const [ps, setps] = useState("");
//   const [ms, setMs] = useState("");

//   const check = (e) => {
//     if (!em && !ps) {
//       setMs("Please Enter Email And Password");
//       return;
//     }
//     setMs("Login Successful");
//   };

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div>
//         <form onSubmit={check}>
//           <input
//             type="Email"
//             placeholder="Enter Email"
//             value={em}
//             onChange={(e) => setEm(e.target.value)}
//           />
//           <input
//             type="Password"
//             placeholder="Enter Password"
//             value={ps}
//             onChange={(e) => setps(e.target.value)}
//           />

//           <button type="submit"> Submit </button>
//         </form>
//         <p>{ms}</p>
//       </div>
//     </div>
//   );
// }
