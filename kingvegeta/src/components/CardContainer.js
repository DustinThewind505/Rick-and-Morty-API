import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";

const characters = [
    "Harry Potter",
    "Luna Lovegood",
    "Neville Longbottom",
    "Hermione Granger",
    "Ron Weasley",
    "Ginny Weasley",
    "Fred Weasley",
    "George Weasley",
    "Albus Dumbledore ",
    "Aberforth Dumbledore ",
    "Dudley Dursley ",
    "Petunia Dursley ",
    "Vernon Dursley",
    "Cornelius Fudge",
    "Rubeus Hagrid ",
    "Viktor Krum ",
    "Bellatrix Lestrange",
    "Narcissa Malfoy",
    "Draco Malfoy"
];


function CardContainer() {
    const [rickMorty, setRickMorty] = useState([]);
    const [page, setPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    // useEffect(() => {
    //     const results = characters.filter(el => 
    //         el.toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //         setSearchResults(results)
    // }, [searchTerm])

    function handleChanges(event){
            setSearchTerm(event.target.value)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => {
                //const results = response.data.results.filter(character)
                setRickMorty(response.data.results);
                console.log(response)
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })

    }, [page])


    return (
        <div>
            <input
                name='search'
                placeholder='Test'
                value={searchTerm}
                onChange={handleChanges}
            />
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(4)}>4</button>
            <button onClick={() => setPage(5)}>5</button>

            <ul>
                {searchResults.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
            <div className="characters">
                {rickMorty.map((data, index) => (
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