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
    termLength: 25,
    monthlyPayment: 0,
  };

  inputPriceHandler = (e) => {
    const maxLength = 8;
    //checks for the value, if its a number
    if(isNaN(e.target.value)) e.target.value = "";
    //also checks the length to make sure its appropriate
    else if(e.target.value.length > maxLength) {
      //keeps the inout to a length of maxLength
      e.target.value = e.target.value.slice(0,maxLength);
    }
    //set the state to the new value entered
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  //handles the on change for the select event
  dropdownHandler = (event) => {
    this.setupMortgageCalculation(
      this.state.deposit,
      this.state.housePrice,
      this.state.interestAmount,
      this.state.termLength
      );
    this.setState({
      interestAmount: event.target.value,
    })
  }

  calculateMonthlyPayment = (mortgageAmount, interest, term) =>
  {
    interest /= 1200;
    //turn term into months
    term *= 12;
    let monthlyPayment = mortgageAmount*(interest * Math.pow((1 + interest), term));
    monthlyPayment /= (Math.pow((1 + interest), term) - 1);
    return monthlyPayment;
  }

  setupMortgageCalculation = (deposit, housePrice, interestRate, termLength) => {
    //variables for calculations
    let monthlyPayment = 0;
    let mortgage = housePrice - deposit;
    //check to make sure house value has an appropriate value
    if(housePrice <= 0) {
      alert("No house value entered");
      return;
    }
    //check to see if the mortgage isnt already paid
    if(mortgage <= 0) {
      monthlyPayment = "You've paid it all with the deposit!";
    }
    else {
      monthlyPayment = this.calculateMonthlyPayment(mortgage,interestRate,termLength);
      //format the monthlyPayment into currency
      monthlyPayment = Currency.format(monthlyPayment);

    }
    //set the state to the new calc'd value
    this.setState({
      monthlyPayment: monthlyPayment,
    })
  };
  
  render(){
    return (
      <div className="App">
        <Container 
        //props for the main app-container.js
        inputPriceHandler={this.inputPriceHandler}
        monthlyPayment={this.state.monthlyPayment}
        //Props for the dropdown.js
        currentInterest={this.state.interestAmount}
        dropdownHandler={this.dropdownHandler}
        interestArray={this.state.interestArray}
        />
        <button onClick={
          //runs the calc function with the current state properties
          this.setupMortgageCalculation.bind(this,
          this.state.deposit,
          this.state.housePrice,
          this.state.interestAmount,
          this.state.termLength)}>
          Calculate
        </button>
      </div>

    );
  }
}

export default App;
