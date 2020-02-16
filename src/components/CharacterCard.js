import React from "react";



function CharacterCard(props) {

    

    return (
        <div className="character-list">
            <div key={props.id}>
                <h2 onMouseOver={(event) => event.target.textContent = "Evil Morty 🚫"} onMouseLeave={(event) => event.target.textContent = props.name}>{props.name}</h2>
                <img src={props.image} className='test' onMouseOver={(event) => event.target.src = "https://rickandmortyapi.com/api/character/avatar/118.jpeg"} onMouseLeave={(event) => event.target.src = props.image}/>
                <h3>Location: {props.location.name}</h3>
                <h4>DOA: {props.status}</h4>
            </div>
        </div>


    )
}



export default CharacterCard;