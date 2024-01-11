import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const[aadhar,setAadhar] = useState("");
  const [prn,setPrn] = useState("");
  const [jfId , setJfid] = useState("");

  // console.log("from react ", prn , jfId);
   
  const handleDataFromParent = (e)=>{
    if(e.data)console.log("from here ",e?.data);
    // if(e.data){
    //   setPrn(e.data?.PRN);
    //   setJfid(e.data?.JFId);
    // }

  }


  useEffect(()=>{
   window.addEventListener("message",handleDataFromParent);
   return ()=>{
    window.removeEventListener("message",handleDataFromParent);
   }
  });
 


  const handleSubmit=()=>{
    try {

      // console.log(localStorage.getItem("data"));
      
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <div className="container">
        <input placeholder="Aadhar number" onChange={(e)=>setAadhar(e.target.value)} value={aadhar}></input> 
        <button type="button" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;
