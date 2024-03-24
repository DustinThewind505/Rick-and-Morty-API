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
            <footer>
                <h3>More from Rick and Morty</h3>
                <div>
                <svg viewBox="0 0 250 203.1" aria-label="@rickandmorty on Twitter"><path d="M-75-98.5h400v400H-75z" fill="none"></path><path d="M78.6 203.1c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-.1-6.6 10-7.3 18.7-16.3 25.6-26.5-9.4 4.1-19.3 6.9-29.5 8.1 10.7-6.4 18.7-16.5 22.5-28.4-10.1 6-21.1 10.2-32.6 12.4C191-4.5 158.5-5.5 137.8 14c-13.3 12.5-19 31.2-14.8 49C81.9 60.9 43.4 41.4 17.4 9.4 3.8 32.8 10.7 62.8 33.3 77.8c-8.2-.2-16.1-2.4-23.3-6.4v.6c0 24.4 17.2 45.4 41.2 50.3-7.6 2.1-15.5 2.4-23.2.9 6.7 20.9 26 35.2 47.9 35.6-18.2 14.3-40.6 22-63.7 22-4.1 0-8.2-.3-12.2-.7 23.5 15.1 50.7 23 78.6 23"></path></svg>
                </div>
            </footer>
        </div>
    )
}

export default Home;