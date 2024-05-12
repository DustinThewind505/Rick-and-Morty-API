import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/characterCard";
import SelectedCharacter from './components/selectedCharacter';


import "./characters-page.css";


const defaultCharacter = {
    name: "---",
    image: "images/default-profile-image.jpeg",
    location: "",
    status: ""
}



function CardContainer() {
    const [page, setPage] = useState(1);
    const [loadMorepage, setLoadMorePage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [charactersArray, setCharactersArray] = useState([]);
    const [loadMorearray, setloadMoreArray] = useState([])
    const [hoverCharacter, setHoverCharacter] = useState(defaultCharacter);

    const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);

    const [circleRating, setCircleRating] = useState(0);


    function handleChanges(event) {
        setSearchTerm(event.target.value)
    }

    const handleCharacterMenuOnLeave = () => {
        if(circleRating > 0) {
            setCircleRating(0)
        }
        setHoverCharacter(defaultCharacter)
    }

    const handleHover = (characterObject) => {
        setHoverCharacter(characterObject)
    }

    const handleClick = (characterObject) => {
        if(circleRating > 0) {
            setCircleRating(0)
        }
        setSelectedCharacter(characterObject)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                const results = response.data.results.filter(element =>
                    element.name.toLowerCase().includes(searchTerm.toLowerCase())
                );


                if(numberOfPages === 0) {
                    setNumberOfPages(response.data.info.pages)
                }

                setCharactersArray(response.data.results)

                setSearchResults(results)
                
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })

    }, [searchTerm, page, numberOfPages])

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${loadMorepage}`)
            .then(response => {

                const newLoadMoreArray = [...loadMorearray, ...response.data.results];
                setloadMoreArray(newLoadMoreArray)
                
            })
            .catch(error => {
                console.log("The load more data was not returned", error);
            })

    }, [loadMorepage])


    return (
        <section className="container">
            <div>
                <div className="selected-character-container">
                    <Character 
                        name={hoverCharacter.name}
                        image={hoverCharacter.image}
                        location={hoverCharacter.location}
                        status={hoverCharacter.status} 
                    />
                    <SelectedCharacter selectedCharacter={selectedCharacter} circleRating={circleRating} setCircleRating={setCircleRating} />
                </div>
                <div className="characters-menu" onMouseLeave={() => handleCharacterMenuOnLeave()} >
                    {charactersArray.map((character, index) => {
                        return(
                                <img 
                                    key={index}
                                    src={character.image}
                                    alt={character.name}
                                    onMouseOver={() => handleHover(character)}
                                    onClick={() => handleClick(character)}
                                />
                        )
                    })} 
                </div>
            </div>
            <div className="forms">
                <div>
                    <span>Character: </span>
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={handleChanges}
                    />
                </div>
            </div>
            <div className="footer-buttons">
                <span>Pages |</span>
                    {
                        [...Array(numberOfPages)].map((_, index) => {
                            index += 1;
                            return (
                                <button key={index} onClick={() => setPage(index)}>{index}</button>
                            )
                        })
                    }
                <span>|</span>
            </div>
            <div className="characters">
                {searchResults.map((data, index) => (
                    <Character
                        key={index}
                        name={data.name}
                        image={data.image}
                        status={data.status}
                        location={data.location}
                    />
                ))}
            </div>
            <div className="characters-load-more-container">
                {
                    loadMorearray.map((character) => {
                        return(
                            <img src={character.image} alt={character.name} />
                        )
                    })
                }
            </div>
            <button className="characters-load-more-button" onClick={() => setLoadMorePage(loadMorepage + 1)}>Load More</button>
        </section>



    )
}

export default CardContainer;