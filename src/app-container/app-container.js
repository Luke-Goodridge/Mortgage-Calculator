import React from 'react';

const app_container = ({interestAmount,totalMortgageCost,inputPriceHandler}) => {
    return (
        <div className="App">
            <h1>Mortgage Calculator</h1>
            <div>
                <h2>Interest rate</h2>
                {/* for now the interest rate is fixed, will change to a drop down soon */}
                <p>{interestAmount+"%"}</p>
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