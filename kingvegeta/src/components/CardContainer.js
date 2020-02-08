import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";


function CardContainer() {
    const [page, setPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    function handleChanges(event){
            setSearchTerm(event.target.value)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                console.log(response)
                const results = response.data.results.filter(element =>
                    element.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                setSearchResults(results)
                //setRickMorty(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })

    }, [searchTerm, page])


    return (
        <div>
            <span>Character: |</span>
            <input
                type='text'
                placeholder='Search'
                value={searchTerm}
                onChange={handleChanges}
            />
            <span>|</span>
            <br/>
            <span>Pages: |</span>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(4)}>4</button>
            <button onClick={() => setPage(5)}>5</button>
            <button onClick={() => setPage(6)}>6</button>
            <button onClick={() => setPage(7)}>7</button>
            <button onClick={() => setPage(8)}>8</button>
            <span>|</span>
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
        </div>



    )
}

export default CardContainer;