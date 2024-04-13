import React from "react";



export default function SelectedCharacter({ selectedCharacter }) {
    console.log("selected character", selectedCharacter)


    return(
        <div className="selected-character">
            <div className="select-character-left">
                <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            </div>
            <div className="select-character-right">
                <h2>{selectedCharacter.name}</h2>
                <p>{selectedCharacter.location.name}</p>
                <p>{selectedCharacter.status}</p>
            </div>
        </div>
    )
}
