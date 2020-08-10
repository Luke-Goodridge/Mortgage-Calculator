import React from 'react';
import Dropdown from '../dropdown/dropdown';

const depositText = "Please enter a deposit value";
const houseText = "Please enter a house value";

const mortgageCalculator = (props) => {
    return (
        <div>
            <h1>Mortgage Calculator</h1>
            <div className="dropdown-container">
                <h2>Interest rate (%)</h2>
                {/* Drop down component, this populates from the interestArray in the state */}
                {Dropdown(props.currentInterest,props.interestArray,props.interestDropdownHandler)}
            </div>
            <div className="dropdown-container">
                <h2>Term length (years)</h2>
                {Dropdown(props.termLength,props.termLengthArray,props.termDropdownHandler)}
            </div>
            <div>
                <h2>Deposit (£)</h2>
                <input 
                name = "deposit"
                onChange={props.inputPriceHandler}
                onFocus={clearPlaceholder}
                onBlur={initPlaceholder}
                placeholder={depositText}
                ></input>
            </div>
            <div>
                <h2>House price (£)</h2>
                <input
                //this 'name' field is used to link the...
                //property name when used to change state
                name = "housePrice"
                onChange={props.inputPriceHandler}
                onFocus={clearPlaceholder}
                onBlur={initPlaceholder}
                placeholder={houseText}
                ></input>
            </div>
            {/* displays the total to the user */}
            <h2>Monthly payment amount</h2>
            <h2>{props.monthlyPayment}</h2>
            <div className="buttonContainer">
                <button id="calcBtn" onClick={props.calculateButton}>Calculate</button>
                <button id="resetBtn" className="hidden" onClick={props.resetBtnHandler}>Reset</button>
            </div>
        </div>
    );

}

const clearPlaceholder = (event) => {
    event.target.placeholder = "";
  }
  
const initPlaceholder = (event) => {
    if(event.target.name === "deposit"){
        event.target.placeholder = depositText;
    }
    else event.target.placeholder = houseText;
  }

export default mortgageCalculator;