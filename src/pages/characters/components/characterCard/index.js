import React from "react";



function CharacterCard(props) {
    

    return (
        <div key={props.id} className="character-card">
            <h2>{props.name}</h2>
            <img className='test' src={props.image} alt={props.name}/>
            <p>Location: {props.location?.name}</p>
            <p>DOA: <span className="doa">{props.status}</span></p>
        </div>


    )
}



export default CharacterCard;