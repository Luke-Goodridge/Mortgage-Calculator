(this["webpackJsonpmortgage-calculator-app"]=this["webpackJsonpmortgage-calculator-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=(a(14),a(1)),s=a(2),i=a(5),u=a(6),m=a(8),h=a(7),d=(a(15),function(e,t,a){var n=0;return r.a.createElement("select",{value:e,onChange:a,className:"Dropdown"},t.map((function(e){return r.a.createElement("option",{key:n++,value:e},e)})))}),p=function(e){return""===localStorage.getItem(e)?null:localStorage.getItem(e)},g=p("deposit"),y=p("housePrice"),v=function(e){e.target.placeholder=""},f=function(e){"deposit"===e.target.name?e.target.placeholder="Please enter a deposit value":e.target.placeholder="Please enter a house value"},E=function(e){var t=function(t){"Enter"===t.key&&e.calculateButton()};return r.a.createElement("div",null,r.a.createElement("h1",null,"Mortgage Calculator"),r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("h2",null,"Interest rate (%)"),d(e.currentInterest,e.interestArray,e.interestDropdownHandler)),r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("h2",null,"Term length (years)"),d(e.termLength,e.termLengthArray,e.termDropdownHandler)),r.a.createElement("div",null,r.a.createElement("h2",null,"Deposit (\xa3)"),r.a.createElement("input",{name:"deposit",onChange:e.inputPriceHandler,onFocus:v,onBlur:f,placeholder:"Please enter a deposit value",onKeyPress:t,defaultValue:g})),r.a.createElement("div",null,r.a.createElement("h2",null,"House price (\xa3)"),r.a.createElement("input",{name:"housePrice",onChange:e.inputPriceHandler,onFocus:v,onBlur:f,placeholder:"Please enter a house value",onKeyPress:t,defaultValue:y})),r.a.createElement("h2",null,"Monthly payment amount"),r.a.createElement("h2",null,e.monthlyPayment),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement("button",{id:"calcBtn",onClick:e.calculateButton},"Calculate"),r.a.createElement("button",{id:"resetBtn",className:"hidden",onClick:e.resetBtnHandler},"Reset")))},w=new Intl.NumberFormat("en-EU",{style:"currency",currency:"GBP"}),P=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).interestArray=[.5,1,2,2.5,3,3.5],e.termLengthArray=[10,15,20,25,30,35,40],e.initialState={interestAmount:2.5,deposit:g,housePrice:y,termLength:25,monthlyPayment:0},e.resetState={interestAmount:2.5,deposit:0,housePrice:0,termLength:25,monthlyPayment:0},e.state=Object(s.a)({},e.initialState),e.inputPriceHandler=function(t){isNaN(t.target.value)?t.target.value="":t.target.value.length>8&&(t.target.value=t.target.value.slice(0,8)),e.updateLocalStorage(t.target.name,t.target.value),e.setState(Object(c.a)({},t.target.name,t.target.value))},e.updateLocalStorage=function(e,t){localStorage.setItem(e,t)},e.interestDropdownHandler=function(t){e.setState({interestAmount:t.target.value})},e.termDropdownHandler=function(t){e.setState({termLength:t.target.value})},e.resetCalculator=function(t){localStorage.clear(),e.setState(Object(s.a)({},e.resetState)),document.querySelectorAll("input").forEach((function(e){e.value=null})),document.querySelector("#resetBtn").classList.add("hidden")},e.calculateMonthlyPayment=function(e,t,a){a*=12;var n=0;return(t/=1200)<=0?n=e/a:(n=e*(t*Math.pow(1+t,a)),n/=Math.pow(1+t,a)-1),n},e.setupMortgageCalculation=function(t,a,n,r){var l=0,o=a-t;a<=0?alert("No house value entered"):(o<=0?l="You've paid it all with the deposit!":(l=e.calculateMonthlyPayment(o,n,r),l=w.format(l),l+=" per month"),document.querySelector("#resetBtn").classList.remove("hidden"),e.setState({monthlyPayment:l}))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MortgageCalc"},r.a.createElement(E,{inputPriceHandler:this.inputPriceHandler,monthlyPayment:this.state.monthlyPayment,currentInterest:this.state.interestAmount,interestDropdownHandler:this.interestDropdownHandler,interestArray:this.interestArray,termLength:this.state.termLength,termDropdownHandler:this.termDropdownHandler,termLengthArray:this.termLengthArray,calculateButton:this.setupMortgageCalculation.bind(this,this.state.deposit,this.state.housePrice,this.state.interestAmount,this.state.termLength),resetBtnHandler:this.resetCalculator}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap",rel:"stylesheet"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.52cba30d.chunk.js.map