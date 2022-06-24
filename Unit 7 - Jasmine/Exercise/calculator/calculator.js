window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = 100000;
  let years = 5;
  let rate = 6;
  
  document.getElementById("loan-amount").value = amount;
  document.getElementById("loan-years").value = years;
  document.getElementById("loan-rate").value = rate;

  let monthly = calculateMonthlyPayment({"amount":amount, "years":years, "rate":rate})
  updateMonthly(monthly)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    const amount = values["amount"];
    const years = values["years"];
    const rate = values["rate"];
  
    let monthly = ((amount * (rate * .01) + amount) / (years * 12)).toFixed(2);
    if (monthly === 'Infinity' || monthly === 'NaN' || !monthly || monthly < 0){return 'Invalid Input'}

    return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let span = document.getElementById("monthly-payment")
  span.innerText = `$${monthly}`;
}
