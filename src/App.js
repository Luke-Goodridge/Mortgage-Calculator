import React, { Component } from 'react';
import './App.css';
import MortgageCalc from "./mortgageCalculator/mortgageCalculator.js";
import Currency from "./Utilities/Utilities";

class App extends Component {
  interestArray = [0.5,1.0,2.0,2.5,3,3.5];
  termLengthArray = [10,15,20,25,30,35,40];

  initialState = {
    interestAmount: 2.5,
    deposit: 0,
    housePrice: 0,
    termLength: 25,
    monthlyPayment: 0,
  }
  //sets the inital state of the app
  state = {
    ...this.initialState
  };

  inputPriceHandler = (e) => {
    const maxLength = 8;
    //checks for the value, if its not a number, dont update the value.
    if(isNaN(e.target.value)) e.target.value = "";
    //also checks the length to make sure its appropriate
    else if(e.target.value.length > maxLength) {
      //keeps the input to a length of maxLength
      e.target.value = e.target.value.slice(0,maxLength);
    }
    //set the state to the new value entered
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  //handles the on change for the select event
  interestDropdownHandler = (event) => {
    this.setState({
      interestAmount: event.target.value,
    })
  }  
  termDropdownHandler = (event) => {
    this.setState({
      termLength: event.target.value,
    })
  }

  resetCalculator = (event) => {
    //reset the state to the initial state
    this.setState({
      ...this.initialState
    })
    //reset the inputs
   let inputs = document.querySelectorAll("input");
   inputs.forEach(input => {
     input.value = null;
   });
   //hide the reset button
   document.querySelector("#resetBtn").classList.add("hidden");
  }

  clearPlaceholder = (event) => {
    event.target.placeholder = "";
  }

  calculateMonthlyPayment = (mortgageAmount, interest, term) =>
  {
    interest /= 1200;
    term *= 12;
    let monthlyPayment = 0;
    //do an extra check if interest is 0 or lower, we dont need to do the calculation.
    if(interest <= 0){
      monthlyPayment = mortgageAmount / term;
    }
    else {
      monthlyPayment = mortgageAmount*(interest * Math.pow((1 + interest), term));
      monthlyPayment /= (Math.pow((1 + interest), term) - 1);
    }
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
      monthlyPayment += " per month";
    }
    //show the reset button
    document.querySelector("#resetBtn").classList.remove("hidden");
    //set the state to the new calc'd value
    this.setState({
      monthlyPayment: monthlyPayment,
    })
  };
  
  render(){
    return (
      <div className="MortgageCalc">
        <MortgageCalc 
        //props for the main app-container.js
        inputPriceHandler={this.inputPriceHandler}
        monthlyPayment={this.state.monthlyPayment}
        //Interest drop down
        currentInterest={this.state.interestAmount}
        interestDropdownHandler={this.interestDropdownHandler}
        interestArray={this.interestArray}
        //Term drop down
        termLength={this.state.termLength}
        termDropdownHandler={this.termDropdownHandler}
        termLengthArray={this.termLengthArray}
        //calculate button
        calculateButton={this.setupMortgageCalculation.bind(this,
          this.state.deposit,
          this.state.housePrice,
          this.state.interestAmount,
          this.state.termLength)}
        //reset button
        resetBtnHandler={this.resetCalculator}
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet"></link>
      </div>

    );
  }
}

export default App;
