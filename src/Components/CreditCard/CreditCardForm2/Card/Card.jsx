import React, { useState } from "react";
import "./Card.css";
import chipImage from "./card-asserts/chip.png";
import masterCard from "./card-type/mastercard.png";
import mapImage from "./card-asserts/map.png";
import patternImage from "./card-asserts/pattern.png";
import visaImage from "./card-asserts/visa.png";

const Card = ({ name, cardNumber, expiry, cvv, isFlipped, }) => {
  

  // Function to format the card number for display
  const formatCardNumber = (cardNumber) => {
    // If cardNumber is provided and not empty, format it with space after every 4 digits
    if (cardNumber && cardNumber.trim() !== "") {
      return cardNumber.replace(/(.{4})/g, "$1 ");
    }
    // If cardNumber is not provided or empty, return "xxxxxxxx" as default
    return "xxxx xxxx xxxx xxxx";
  };

  

  return (
    <div className="creditCard" >
      <div className={`cardInner ${isFlipped ? "flipped" : ""}`}>
        <div className="front">
          <img src={mapImage} className="map-img" alt="map" />
          <div className="chip">
            <img
              className="chipImg"
              src={chipImage}
              alt="chipImage"
            />
            <div className="cardName">
              <img src={masterCard} alt="cardImage" className="imgSize" />
            </div>
          </div>
          <div className="cardNumber mt-2">
            <h1>{formatCardNumber(cardNumber)}</h1>
          </div>
          <div className="basicDtl mt-4">
            <div className="row">
              <div className="col-8 text-center">
                <label className="cardDtl">Owner Name</label>
                <p className="cardDtlTxt">{name}</p>
              </div>
              <div className="col-4 text-center">
                <label className="cardDtl expiry">Expiry</label>
                <p className="cardDtlTxt">{expiry}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <img src={mapImage} className="map-img" alt="map" />
          <div className="bar"></div>
          <div className="cardRow card-cvv">
            <div>
              <img src={patternImage} alt="pattern" />
            </div>
            <p className="cardDtlTxt cvvWidth">{cvv}</p>
          </div>
          <div className="cardRow cardText">
            <p>
              This is a virtual card design built using HTML and CSS. You can
              also design something like this.
            </p>
          </div>
          <div className="cardRow signature">
            <p>CUSTOMER SIGNATURE</p>
            <img src={visaImage} width="80px" alt="visa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
