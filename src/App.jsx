/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const App = () => {

  let [input,setinput] = useState('')
  let [output,setoutput] = useState()

let value=(i)=>{
  setinput(input+i)
}
let final=()=>{
  console.log(typeof(input))
}

  return (
    <div>
      <button className='border border-black w-[50px] h-[50px]' onClick={()=>value(1)}>1</button>
      <button className='border border-black w-[50px] h-[50px]' onClick={()=>value(2)}>2</button>
      <button className='border border-black w-[50px] h-[50px]' onClick={()=>value('+')}>+</button>
      <button className='border border-black w-[50px] h-[50px]' onClick={final}>=</button>
      <h1>{input}</h1>
      {/* <h1>{output}</h1> */}
    </div>
  )
}

export default App



// import React, { useState } from 'react';

// function App() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const clearInput = () => {
//     setInput("");
//     setResult("");
//   };

//   const calculate = () => {
//     try {
//       setResult(eval(input));
//     } catch {
//       setResult("Error");
//     }
//   };

//   return (
//     
//         <input
//           type="text"
//           value={input}
//           readOnly
//         />
//         <div >{result}</div>
//         <div >
//           {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map((item) => (
//             <button
//               key={item}
//               onClick={() => (item === "=" ? calculate() : item === "C" ? clearInput() : handleClick(item))}>
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
