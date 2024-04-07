import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/CharacterCard";

import "./pageCharacters.css";


function CardContainer() {
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    function handleChanges(event) {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                const results = response.data.results.filter(element =>
                    element.name.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResults(results)
                setNumberOfPages(response.data.info.pages)
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