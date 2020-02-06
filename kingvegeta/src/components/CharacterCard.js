import React from "react";



function CharacterCard(props) {



    return (
        <div className="character-list">
            <div key={props.id}>
                <h2>{props.name}</h2>
                <img src={props.image} />
                <h3>Location: {props.location.name}</h3>
                <h4>DOA: {props.status}</h4>
            </div>
        </div>


    )
}



export default CharacterCard;