import React, {useEffect} from 'react';
import CardContainer from './components/CardContainer';
import './App.css';

// const Image = document.querySelector("img");
// Image.addEventListener("mouseover", () => Image.src = "https://www.bing.com/th/id/OIP.Jm_OAMZ4biSSznXhD7kNxwHaHa?pid=Api&rs=1");
// Image.addEventListener("mouseleave", () => Image.src="https://4.bp.blogspot.com/-2bZ4P4_tBBQ/WlvmPKrzEmI/AAAAAAABO1g/L62SqX666uYDr0DXhva6uWiKH4cOo8_SwCKgBGAs/s1600/58f37701a4fa116215a9240c.png");
// const topImg = document.createElement("img");
// topImg.src = "https://www.bing.com/th/id/OIP.Jm_OAMZ4biSSznXhD7kNxwHaHa?pid=Api&rs=1";
// topImg.className = "App-logo";

// const theHeader = document.querySelector("header");
// console.log(topImg)

// useEffect(()=> {
//   function handleClick(event){
//     event.preventDefault();
//     console.log("mouseclick")
//   }
// }, [])
function handleMouseOver(event){
  event.preventDefault();
  
  event.target.src = "https://retohercules.com/images/morty-face-png-3.png";
}

function handleMouseLeave(event){
  event.preventDefault();
  
  event.target.src = "https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png"
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png" className="App-logo" alt="Spinning Rick Sanchez head" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        
        <h2>
         "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h2>
      </header>
      
        
      
      <CardContainer />
    </div>
  );
}

export default App;
