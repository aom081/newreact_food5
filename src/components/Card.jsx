import React from "react";
import "./Card.css";


function Card(props) {
  
  const { CardT,onCardClick} = props;
  return (
    <div className="card" >
      <div className="card-body">
        <img
          src={CardT.thumbnail}
          alt="Card Image"
          className="card-image"
        />
        <h6 className="card-subtitle mb-2 text-body-secondary">--{CardT.title}--</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button  className="Card-view-button" onClick={() => {onCardClick(CardT)}}> View </button>
        <button className="Card-edit-button" > Edit </button>
        <button className="Card-delete-button"> Delete </button>
      </div>
    </div>
  )
}

export default Card