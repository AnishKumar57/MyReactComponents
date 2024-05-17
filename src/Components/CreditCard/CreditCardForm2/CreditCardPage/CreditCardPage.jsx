import React, { useState, useRef, useEffect } from "react";
import "./CreditCardPage.css";
import Card from "../Card/Card";

const CreditCardPage = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const [isFlipped, setIsFlipped] = useState(false);

  
  const handleCvvFocus = () => {
    setIsFlipped(true); // Toggle flipped state on click
  };
  const handleCvvBlur = () => {
    setIsFlipped(false); // Toggle flipped state on click
  };
  const handleCvvMouseLeave = () => {
    setIsFlipped(false); // Toggle flipped state on click
  };

  const handleNameChange = (e) => {
    const newName = e.target.value.toUpperCase(); // Convert to uppercase
    setName(newName);
    updateSubmittedData({ name: newName, cardNumber, month, year, cvv });
  };

  const handleCardNumberChange = (e) => {
    let newCardNumber = e.target.value;

    // Remove any non-digit characters from the input
    newCardNumber = newCardNumber.replace(/\D/g, "");

    // Limit card number to a maximum of 16 digits
    newCardNumber = newCardNumber.slice(0, 16);

    // Insert space after every 4 digits for better formatting
    newCardNumber = newCardNumber.replace(/(.{4})/, "$1");

    setCardNumber(newCardNumber);
    updateSubmittedData({ name, cardNumber: newCardNumber, month, year, cvv });
  };

  const handleMonthChange = (e) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    updateSubmittedData({ name, cardNumber, month: newMonth, year, cvv });
  };
  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setYear(newYear);
    updateSubmittedData({ name, cardNumber, month, year: newYear, cvv });
  };
  const handleCvvChange = (e) => {
    let newCvv = e.target.value;

    // Remove any non-numeric characters from the input
    newCvv = newCvv.replace(/\D/g, "");

    // Limit CVV to 3 characters
    newCvv = newCvv.slice(0, 3);

    setCvv(newCvv);
    updateSubmittedData({ name, cardNumber, month, year, cvv: newCvv });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentComplete(true);
  };

  const updateSubmittedData = (updatedData) => {
    setSubmittedData(updatedData);
  };

  return (
    <>
      <div className="creditCardPage">
        <h3>Payment Details</h3>
        <Card
          name={name}
          cardNumber={cardNumber}
          expiry={`${month}/${year}`}
          cvv={cvv}
          isFlipped={isFlipped} // Pass isFlipped state as a prop
        />

        <form onSubmit={handlePaymentSubmit}>
          <label className="labelName">
            CARD HOLDER NAME
            <br />
            <input
              className="inputBox"
              type="text"
              onkeyup="this.value = this.value.toUpperCase()"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />

          <label className="labelName">
            CARD NUMBER
            <br />
            <input
              className="inputBox"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </label>
          <br />

          <label className="expDate">
            EXP DATE
            <p>
              <select name="month" value={month} onChange={handleMonthChange}>
                <option value="">Month</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="05">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="Year" value={year} onChange={handleYearChange}>
                <option value="">Year</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
              </select>
            </p>
          </label>

          <label className="cvv">
            CVV
            <br />
            <input
              className="inputBox"
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              onFocus={handleCvvFocus}
              onBlur={handleCvvBlur}
              onMouseLeave={handleCvvMouseLeave}
            />
          </label>
          <br />

          <button className="payBtn" type="submit">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default CreditCardPage;
