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
function handleClick(event){
  event.preventDefault();
  event.target.textContent = "https://www.bing.com/th/id/OIP.Jm_OAMZ4biSSznXhD7kNxwHaHa?pid=Api&rs=1";
}

function handeOver(event){
  event.preventDefault();
  event.target.textContent = '"Wubba Lubba Dub Dub!" -Rick Sanchez'
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://img.cartoongoodies.com/wp-content/uploads/2019/11/07152740/Rick-Sanchez-face-778x1024.png" className="App-logo" alt="Spinning Rick Sanchez head" onMouseOver={handleClick} onClick={handleClick}/>
        
        <h2 onClick={handleClick} onMouseOver={handeOver}>
         "Wubba Lubba Dub Dub!" -Rick Sanchez
        </h2>
      </header>
      
        
      
      <CardContainer />
    </div>
  );
}

export default App;
