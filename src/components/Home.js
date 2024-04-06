import React, { useState } from "react";

import seasonData from "../data";

function Home(){
    const [seasonAccordianSingleSelection, setSeasonAccordianSingleSelection] = useState(0)

    const handleSingleSelection = (id) => {

        if(seasonAccordianSingleSelection === id) {
            setSeasonAccordianSingleSelection(0);
        } else {
            setSeasonAccordianSingleSelection(id)
        }
        
    }

    
    return(
        <div className="home-container">
            <div className="morty-gifs">
                <img src="images/rick-morty-logo.png" alt="Rick and Morty logo" />
                <a href="https://www.adultswim.com/streams/rick-and-morty" rel="noopener noreferrer" target="_blank" >FREE 24/7 MARATHON</a>
            </div>
            <div className="seasons-container">
                {
                    seasonData && seasonData.length > 0 ? 
                    seasonData.map(season => <div className="seasons-card" key={season.id} onClick={() => handleSingleSelection(season.id)}>
                       <div className="seasons-card-title">
                            <h2>Season: {season.seasonNumber}</h2>
                            <p>{seasonAccordianSingleSelection !== season.id ? "+" : "-"}</p>
                       </div>
                       <div className="episodes-container">
                            {seasonAccordianSingleSelection === season.id && season.availableEpisodes.length > 0 ?
                                season.availableEpisodes.map(episode => <a key={episode.id} href={episode.link} rel="noopener noreferrer" target="_blank">
                                    <div>
                                        <p>{episode.title}</p>
                                        <p>{episode.description}</p>
                                    </div>
                                </a>
                                )
                                :
                                null
                            }
                       </div>
                    </div>)
                    :
                    <p>No season data found</p>
                }
            </div>
        </div>
    )
}

export default Home;