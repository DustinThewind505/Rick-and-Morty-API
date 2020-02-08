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
    const [person, setPerson] = useState("summer");

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const results = characters.filter(el => 
            el.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results)
    }, [searchTerm])

    function handleChanges(event){
            setSearchTerm(event.target.value)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?name=${person}`)
            .then(response => {
                setRickMorty(response.data.results);
                console.log(response.data.results)
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })

    }, [person])


    return (
        <div>
            <input
                name='search'
                placeholder='Test'
                value={searchTerm}
                onChange={handleChanges}
            />
            <button onClick={() => setPerson("rick")}>Rick</button>
            <button onClick={() => setPerson("morty")}>Morty</button>
            <button onClick={() => setPerson("summer")}>Summer</button>
            <button onClick={() => setPerson("jerry")}>Jerry</button>
            <button onClick={() => setPerson("beth")}>Beth</button>

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