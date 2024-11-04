/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const App = () => {
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "*",
    "-",
    "+",
    "=",
    "CL"
  ];

  let [output, setoutput] = useState("");
  let [shows, setshows] = useState("");
  let inputvalues = (i) => {
    setoutput(output + i);
  };
  let show = () => {
   try{
    setshows(eval(output));
   } 
   catch{
    setshows("error")
   }
  };
  let clear=()=>{
    setoutput(" ")
    setshows(" ")
  }
  return (
    <div>
      <div className=" border-black h-[500px] justify-center">
        <div className="border border-black w-[250px] h-[80px] m-auto mt-14 text-xl">
        <h1>{output}</h1>
        <h1>{shows}</h1>
        </div>
        
        <div className="grid  grid-cols-4  border border-red-700 w-[250px] h-[280px] m-auto ">
         
          {buttons.map((btn, i) => (
            <button
              className="bg-blue-500 font-bold border-black h-[60px] w-[60px] gap-2"
              key={i}
              onClick={() => ( btn=="="?show() :btn=="CL"? clear(): inputvalues(btn))} >
              {btn}
            </button>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default App;


