import React from "react";
import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
const HomePage=()=>{
    const navigate=useNavigate();
    const [value,setvalue]=useState();
    
    const handlejoin=useCallback(()=>{
navigate(`/room/${value}`);
    },[value]);
return(
    <div>
<input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="enter room code"/>
<button onClick={handlejoin}>Join</button>
</div>
)
}
export default HomePage;