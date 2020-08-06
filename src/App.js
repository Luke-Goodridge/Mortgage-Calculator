import React, { Component } from 'react';
import './App.css';
import Container from "./app-container/app-container.js";
import Currency from "./Utilities/Utilities";

class App extends Component {
  //sets the inital state of the app
  state = {
    interestAmount: 2.5,
    interestArray: [0.0,1.0,2.0,2.5,3,3.5],
    deposit: 0,
    housePrice: 0,
    //this mortgage length is yet to be used
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
    //variables for calculations
    let total = 0;
    let mortgage = housePrice - deposit;
    //check to make sure house value has an appropriate value
    if(housePrice <= 0) {
      alert("No house value entered");
      return;
    }
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
      total = Currency.format(total);
    }
    //set the state to the new calc'd value
    this.setState({
      total: total,
    })
  };

  //handles the on change for the select event
  dropdownHandler = (event) => {
    this.setState({
      interestAmount: event.target.value,
    })
  }
  render(){
    return (
      <div className="App">
        <Container 
        //props for the main app-container.js
        inputPriceHandler={this.inputPriceHandler}
        totalMortgageCost={this.state.total}
        //Props for the dropdown.js
        currentInterest={this.state.interestAmount}
        dropdownHandler={this.dropdownHandler}
        interestArray={this.state.interestArray}
        />
        <button onClick={
          //runs the calc function with the current state properties
          this.calculateTotalPrice.bind(this,this.state.deposit,this.state.housePrice,this.state.interestAmount)}>
          Calculate
        </button>
      </div>

    );
  }
}

export default App;
