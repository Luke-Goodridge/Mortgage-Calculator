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

    //check to make sure house value has an appropriate value
    if(housePrice <= 0) {
      alert("No house value entered");
      return;
    }
    let mortgage = housePrice - deposit;
    //check to see if the mortgage isnt already paid
    if(mortgage <= 0) {
      total = "You've paid it all with the deposit!";
    }
    else {
      //get house price and turn it into 1%
      total = (mortgage) / 100;
      //find interest rate of the total
      total *= interestRate;
      //add the interest back to the mortage amount
      total += mortgage;
      total = "£" + total.toString();
    }
    //set the state to the new calc'd value
    this.setState({
      total: total,
    })
  };
  render(){
    return (
      <div className="App">
        <Container 
        interestAmount={this.state.interestAmount}
        inputPriceHandler={this.inputPriceHandler}
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
