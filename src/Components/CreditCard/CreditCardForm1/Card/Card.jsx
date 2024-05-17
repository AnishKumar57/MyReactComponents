import React from "react";
import "./Card.css";
import chipImage from "./card-asserts/chip.png"; // Import the chip image
import masterCard from "./card-type/mastercard.png"; // Import the chip image

const Card = ({ name, cardNumber, expiry, cvv }) => {
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
    <div className="card">
      <div className="chip">
        <img clasName="chipImg" src={chipImage} alt="" className="imgSize" />
        <div className="cardName">
          <img clasName="" src={masterCard} alt="" className="imgSize" />
        </div>
      </div>

      <div className="cardNumber mt-2">
        <h1>{formatCardNumber(cardNumber)}</h1>
      </div>

      <div className="basicDtl mt-4">
        <div className="row">
          <div className="col-6 text-center">
            <label class="cardDtl"> Owner Name</label>
            <p class="cardDtlTxt ">{name}</p>
          </div>

          <div className="col-3 text-center">
            <label class="cardDtl expiry"> Expiry</label>
            <p class="cardDtlTxt">{expiry}</p>
          </div>

          <div className="col-3 text-center">
            <label class="cardDtl"> CVV</label>
            <p class="cardDtlTxt">{cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
