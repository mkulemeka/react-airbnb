import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.location === "online") {
    badgeText = "online";
  }
  return (
    <div className="card">
      <div className="img-container">
        <img className="card--image" src={`../images/${props.coverImg}`} />
        {badgeText && <p className="sale-status">{badgeText}</p>}
      </div>
      <div className="card--text">
        <p className="rating">
          <img className="icon" src="../images/star.png" />
          {props.stats.rating}
          <span> ({props.stats.reviewCount}) ·</span>{" "}
          <span>{props.location}</span>
        </p>
        <p>{props.title}</p>
        <p className="price">
          From ${props.price} / <span>person</span>
        </p>
      </div>
    </div>
  );
}
