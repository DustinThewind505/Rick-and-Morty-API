import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./CharacterCard";

import "./CardContainer.css";


function CardContainer() {
    const [page, setPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])

    function handleChanges(event) {
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
                <div>
                    <span>Pages |</span>
                    <button onClick={() => setPage(1)}>1</button>
                    <button onClick={() => setPage(2)}>2</button>
                    <button onClick={() => setPage(3)}>3</button>
                    <button onClick={() => setPage(4)}>4</button>
                    <button onClick={() => setPage(5)}>5</button>
                    <button onClick={() => setPage(6)}>6</button>
                    <button onClick={() => setPage(7)}>7</button>
                    <button onClick={() => setPage(8)}>8</button>
                    <button onClick={() => setPage(9)}>9</button>
                    <button onClick={() => setPage(10)}>10</button>
                    <button onClick={() => setPage(11)}>11</button>
                    <button onClick={() => setPage(12)}>12</button>
                    <button onClick={() => setPage(13)}>13</button>
                    <button onClick={() => setPage(14)}>14</button>
                    <button onClick={() => setPage(15)}>15</button>
                    <button onClick={() => setPage(16)}>16</button>
                    <button onClick={() => setPage(17)}>17</button>
                    <button onClick={() => setPage(18)}>18</button>
                    <button onClick={() => setPage(19)}>19</button>
                    <button onClick={() => setPage(20)}>20</button>
                    <span>|</span>
                </div>
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
                    <button onClick={() => setPage(1)}>1</button>
                    <button onClick={() => setPage(2)}>2</button>
                    <button onClick={() => setPage(3)}>3</button>
                    <button onClick={() => setPage(4)}>4</button>
                    <button onClick={() => setPage(5)}>5</button>
                    <button onClick={() => setPage(6)}>6</button>
                    <button onClick={() => setPage(7)}>7</button>
                    <button onClick={() => setPage(8)}>8</button>
                    <button onClick={() => setPage(9)}>9</button>
                    <button onClick={() => setPage(10)}>10</button>
                    <button onClick={() => setPage(11)}>11</button>
                    <button onClick={() => setPage(12)}>12</button>
                    <button onClick={() => setPage(13)}>13</button>
                    <button onClick={() => setPage(14)}>14</button>
                    <button onClick={() => setPage(15)}>15</button>
                    <button onClick={() => setPage(16)}>16</button>
                    <button onClick={() => setPage(17)}>17</button>
                    <button onClick={() => setPage(18)}>18</button>
                    <button onClick={() => setPage(19)}>19</button>
                    <button onClick={() => setPage(20)}>20</button>
                    <span>|</span>
                </div>
        </section>



    )
}

export default CardContainer;