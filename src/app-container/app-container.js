import React from 'react';


const app_container = ({totalMortgageCost,inputPriceHandler,interestArray,dropdownHandler,currentInterest}) => {
    let index = 0;
    return (
        <div className="App">
            <h1>Mortgage Calculator</h1>
            <div>
                <h2>Interest rate</h2>
                <select value={currentInterest} onChange={dropdownHandler}>
                    {interestArray.map((option)=>
                        <option key={index++} value={option}>{option}%</option>
                    )}
                </select>
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
            <p>Total amount payable: {totalMortgageCost}</p>
            
        </div>
    );
}

export default app_container;