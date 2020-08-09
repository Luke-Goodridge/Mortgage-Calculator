import React from 'react';
import Dropdown from '../dropdown/dropdown';

const mortgageCalculator = (props) => {
    return (
        <div className="MortgageCalc">
            <button id="resetBtn" onClick={props.resetBtnHandler}>Reset button</button>
            <h1>Mortgage Calculator</h1>
            <div>
                <h2>Interest rate (%)</h2>
                {/* Drop down component, this populates from the interestArray in the state */}
                {Dropdown(props.currentInterest,props.interestArray,props.interestDropdownHandler)}
            </div>
            <div>
                <h2>Term length (years)</h2>
                {Dropdown(props.termLength,props.termLengthArray,props.termDropdownHandler)}
            </div>
            <div>
                <h2>Deposit (£)</h2>
                <input 
                name = "deposit"
                onChange={props.inputPriceHandler}
                placeholder="Please enter a deposit value"
                ></input>
            </div>
            <div>
                <h2>House price (£)</h2>
                <input
                //this 'name' field is used to link the...
                //property name when used to change state
                name = "housePrice"
                onChange={props.inputPriceHandler}
                placeholder="Please enter a house price"
                ></input>
            </div>
            {/* displays the total to the user */}
            <h2>Monthly payment amount</h2>
            <h2>{props.monthlyPayment}</h2>
            <button onClick={props.calculateButton}>Calculate</button>
            
        </div>
    );

}

export default mortgageCalculator;