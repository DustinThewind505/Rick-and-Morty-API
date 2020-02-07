import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";




function CardContainer() {
    const [rickMorty, setRickMorty] = useState([]);
    const [person, setPerson] = useState("summer");

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
                <button onClick={() => setPerson("rick")}>Rick</button>
                <button onClick={() => setPerson("morty")}>Morty</button>
                <button onClick={() => setPerson("summer")}>Summer</button>
                <button onClick={() => setPerson("jerry")}>Jerry</button>
                <button onClick={() => setPerson("beth")}>Beth</button>
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