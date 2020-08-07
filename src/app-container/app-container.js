import React from 'react';
import Dropdown from "../dropdown/dropdown";

const app_container = ({monthlyPayment,inputPriceHandler,interestArray,dropdownHandler,currentInterest}) => {
    return (
        <div className="App">
            <h1>Mortgage Calculator</h1>
            <div>
                <h2>Interest rate</h2>
                <Dropdown 
                    currentInterest={currentInterest}
                    dropdownHandler={dropdownHandler}
                    interestArray={interestArray}
                />
            </div>
            <div>
                <h2>Deposit (£)</h2>
                <input 
                name = "deposit"
                onChange={inputPriceHandler}
                placeholder="Please enter a deposit value"
                ></input>
            </div>
            <div>
                <h2>House price (£)</h2>
                <input
                //this 'name' field is used to link the...
                //property name when used to change state
                name = "housePrice"
                onChange={inputPriceHandler}
                placeholder="Please enter a house price"
                ></input>
            </div>
            {/* displays the total to the user */}
            <h2>Monthly payment amount: {monthlyPayment}</h2>
            
        </div>
    );
}

export default app_container;