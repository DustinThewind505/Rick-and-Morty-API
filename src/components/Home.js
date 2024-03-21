import React, { useState } from "react";

import seasonData from "../data";

function Home(){


    return(
        <div className="home-container">
            <div className="morty-gifs">
                <img src="images/rick-morty-logo.png" alt="Rick and Morty logo" />
                <a href="https://www.adultswim.com/streams/rick-and-morty" rel="noopener noreferrer" target="_blank" >FREE 24/7 MARATHON</a>
            </div>
            <div>
                {
                    seasonData && seasonData.length > 0 ? 
                    seasonData.map(season => <div>
                       <h2>Season: {season.seasonNumber}</h2>
                       {season.availableEpisodes && season.availableEpisodes.length > 0 ?
                            season.availableEpisodes.map(episode => <a href={episode.link}>
                                <div>
                                    <p>{episode.title}</p>
                                    <p>{episode.description}</p>
                                </div>
                            </a>)
                            :
                            <p>No episode data found</p>
                        }
                    </div>)
                    :
                    <p>No season data found</p>
                }
                <div>
                    <p>Season 6</p>
                    <span>+</span>
                </div>
                <div>
                    <p>Season 5</p>
                    <span>+</span>
                </div>
                <div>
                    <p>Season 4</p>
                    <span>+</span>
                </div>
                <div>
                    <p>Season 3</p>
                    <span>+</span>
                </div>
                <div>
                    <p>Season 2</p>
                    <span>+</span>
                </div>
            </div>
            <footer>
                <p>FOOTER</p>
            </footer>
        </div>
    )
}

export default Home;