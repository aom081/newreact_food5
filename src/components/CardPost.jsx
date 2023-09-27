import React from "react";
import "./CardPost.css";
import PropTypes from 'prop-types';

function CardPost(props) {
  const { CardT ,OnBack} = props;
  return (
    <div className="post">
      <div className="post-bg" >
        <div className="post-content">
          <img src={CardT.thumbnail} alt="Thumbnail" />
          <h4>{CardT.title}</h4>
          <div className="button-container">
            <button className="post-back-button" onClick={OnBack} >Back</button>
            <button className="post-edit-button">Edit</button>
            <button className="post-delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
