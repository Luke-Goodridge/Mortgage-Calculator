import React from 'react';

const app_container = ({interestAmount,totalMortgageCost,inputPriceHandler}) => {
    return (
        <div className="App">
            <h1>Mortgage Calculator</h1>
            <div>
                <h2>Interest rate</h2>
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
                name = "housePrice"
                onChange={inputPriceHandler}
                placeholder="Please enter a house price"
                ></input>
            </div>
            <p>Total amount payable: {totalMortgageCost}</p>
            
        </div>
    );
}

export default app_container;