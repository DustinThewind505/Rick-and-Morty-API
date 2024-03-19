import React from "react";



function CharacterCard(props) {
    

    return (
        <div className="character-list">
            <div key={props.id}>
                <h2 onMouseOver={(event) => event.target.textContent = "Evil Morty 🚫"} onMouseLeave={(event) => event.target.textContent = props.name}>{props.name}</h2>
                <img src={props.image} className='test' onMouseOver={(event) => event.target.src = "images/evil-morty-profile-image.jpeg"} onMouseLeave={(event) => event.target.src = props.image} alt={props.name}/>
                <h4>Location: {props.location.name}</h4>
                <h4>DOA: <span className="doa">{props.status}</span></h4>
            </div>
        </div>


    )
}



export default CharacterCard;