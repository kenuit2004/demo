import React, { useState} from "react";
//import '.Body.css'
import Img from './nature.jpg';
const StateHandle = () => {
    const [like, setlike] = useState(0)
    const name[name, setName] = useState("Hi Welcome to my website")
    function decrement(){
        
        setlike(dislike + 1)// 1001
    }
    return (
        <div>
            <img src={Img} alt="" />
            <p>
                =
                {dislike}
            </p>
            
            <button onClick={decrement}>dislike</button>
        </div>
    )
}
export default StateHandle;