import React, { useState } from "react";

const numberOfCircles = 5;

export default function SelectedCharacter({ selectedCharacter, circleRating, setCircleRating }) {
    const [hoverRating, setHoverRating] = useState(0)

    const handleRatingMouseOver = rating => {
        setHoverRating(rating)
    }

    const handleRatingOnClick = (rating)  => {
        if(circleRating === rating) {
            setCircleRating(0)
        } else {
            setCircleRating(rating)
        }
    }

    return(
        <div className="selected-character">
            <div className="selected-character-left">
                <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            </div>
            <div className="selected-character-right">
                <h2>{selectedCharacter.name}</h2>
                <p>{selectedCharacter.location.name}</p>
                <p>{selectedCharacter.status}</p>
                <p>Rating:</p>
                <div className="circle-rating-container">
                    {
                        [...Array(numberOfCircles)].map((_, index) => {
                            index += 1
                            
                            return(
                                <div
                                    key={index}
                                    className={index <= (hoverRating || circleRating) ? "rating-circle active" : "rating-circle inactive"}
                                    onMouseOver={() => handleRatingMouseOver(index)}
                                    onMouseLeave={() => setHoverRating(circleRating)}
                                    onClick={() => handleRatingOnClick(index)}
                                >

                                </div>
                            )  
                        })
                    }
                </div>
            </div>
        </div>
    )
}
