import React from "react";
import { NavLink } from "react-router-dom";


export default function AppHeader({ appPage, setAppPage }) {


    const handleNavClick = (pageNameString) => {
        setAppPage(pageNameString)
    }


    return(
        <header className="app-header">
            <nav className="navbar">
                <NavLink exact to="/" onClick={() => handleNavClick("home")} >Home</NavLink>
                <NavLink to="/characters" onClick={() => handleNavClick("characters")} >Characters</NavLink>
            </nav>

            {
            appPage === "home" ? 
            <img src="images/rick-sanchez-head.png" className="App-logo" alt="Spinning Rick Sanchez head" />
            :
            <img src="images/jerrySmithHead.png" className="App-logo" alt="Spinning Rick Sanchez head" />
            }
            {
            appPage === "home" ? 
            <h1 onMouseOver={(event) => event.target.style.color = "yellow"} onMouseLeave={(event) => event.target.style.color = "white"}>
                "Wubba Lubba Dub Dub!" -Rick Sanchez
            </h1>
            :
            <h1 onMouseOver={(event) => event.target.style.color = "yellow"} onMouseLeave={(event) => event.target.style.color = "white"}>
                "Pluto Was A Planet!" -Jerry Smith
            </h1>
            }

        </header>
    )
}
