import React from "react";

const StateHandle2 =()=> {

    function message() {
        open('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg');
    }
 return (
   <div>
      <span onClick={message}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS93ninT4YOJq7Q-mEX5vUscnfPx3pynwF2m0Egh-j--UBdB68TUMb02gWCECXhouil3jI&usqp=CAU"/>
      </span>
    </div>
    ) 
}
export default StateHandle2;