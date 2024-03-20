import React from "react";

function Home(){


    return(
        <div className="home-container">
            <div className="morty-gifs">
                <img src="images/rick-morty-logo.png" alt="Rick and Morty logo" />
                <a href="https://www.adultswim.com/streams/rick-and-morty" rel="noopener noreferrer" target="_blank" >FREE 24/7 MARATHON</a>
            </div>
            <div>
                <div> Season 7</div>
                <div> Season 6</div>
                <div> Season 5</div>
                <div> Season 4</div>
                <div> Season 3</div>
                <div> Season 2</div>
            </div>
            <footer>
                <p>FOOTER</p>
            </footer>
        </div>
    )
}

export default Home;