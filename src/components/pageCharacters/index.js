import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/CharacterCard";

import "./pageCharacters.css";


const defaultCharacter = {
    name: "---",
    image: "images/default-profile-image.jpeg",
    location: "",
    status: ""
}



function CardContainer() {
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [charactersArray, setCharactersArray] = useState([]);
    const [hoverCharacter, setHoverCharacter] = useState(defaultCharacter);



    function handleChanges(event) {
        setSearchTerm(event.target.value)
    }

    const handleHover = (characterObject) => {
        setHoverCharacter(characterObject)
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


    return (
        <section className="container">
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
            <Character 
                name={hoverCharacter.name}
                image={hoverCharacter.image}
                location={hoverCharacter.location}
                status={hoverCharacter.status} 
            />
            <div className="characters-menu">
               {charactersArray.map((character, index) => {
                   return(
                        <img 
                            key={index + 1}
                            src={character.image}
                            alt={character.name}
                            onMouseOver={() => handleHover(character)}
                            onMouseLeave={() => setHoverCharacter(defaultCharacter)} 
                        />
                   )
               })} 
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
        </section>



    )
}

export default CardContainer;