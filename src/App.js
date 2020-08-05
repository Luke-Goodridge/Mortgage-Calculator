import React, { Component } from 'react';
import './App.css';
import Container from "./app-container/app-container.js";

class App extends Component {
  state = {
    interestAmount: 2.5,
    deposit: 0,
    housePrice: 0,
    mortgageLength: 0,
    total: 0,
  };

  inputPriceHandler = (e) => {
    const maxLength = 8;
    //checks for the value, if its a number
    //also checks the length to make sure its appropriate
    if(isNaN(e.target.value)) e.target.value = "";
    else if(e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0,maxLength);
    }
    //CHANGE THIS
    this.setState({
      [e.target.name]: e.target.value,
    })
  };  

  calculateTotalPrice = (deposit, housePrice, interestRate) => {
    let total = 0;
    let mortgage = housePrice - deposit;
    //check to make sure house value has an appropriate value
    if(housePrice <= 0) {
      alert("No house value entered");
      return;
    }
    //check to see if the deposit is appropriate
    if(deposit >= mortgage) total = "You've paid it all with the deposit!";
    else {
      //get house price and turn it into 1%
      total = (mortgage) / 100;
      //find interest rate of the total
      total *= interestRate;
      //add the interest back to the mortage amount
      total += mortgage;
      //set the total state to the newly calc'd value.
    }
    //set the state
    this.setState({
      total: total,
    })
  };
  render(){
    return (
      <div className="App">
        <Container 
        interestAmount={this.state.interestAmount}
        inputDepositPrice={this.inputPriceHandler.bind(this)}
        inputHousePrice={this.inputPriceHandler.bind(this)}
        totalMortgageCost={this.state.total}
        />
        <button onClick={
          this.calculateTotalPrice.bind(this,this.state.deposit,this.state.housePrice,this.state.interestAmount)}>
          Calculate
        </button>
      </div>

    );
  }
}

export default App;
