describe('Calculate Monthly Rate', function () {
  it("should calculate the monthly rate correctly", function () {
    expect(calculateMonthlyPayment({ "amount": 60000, "years": 5, "rate": 0 })).toEqual('1000.00')
    expect(calculateMonthlyPayment({ "amount": 1250, "years": 1, "rate": .50 })).toEqual('104.69')
  });

  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment({ "amount": 100000, "years": 5, "rate": 3.5 })).toEqual('1725.00')
    expect(calculateMonthlyPayment({ "amount": 777777, "years": 7, "rate": 7.7 })).toEqual('9972.21')
  });

  it("should catch invalid inputs", function () {
    expect(calculateMonthlyPayment({ "amount": 'hello', "years": 5, "rate": 3.5 })).toEqual('Invalid Input')
    expect(calculateMonthlyPayment({ "amount": 125000, "years": -5, "rate": 3.5 })).toEqual('Invalid Input')
    expect(calculateMonthlyPayment({ "amount": 125000, "years": 0, "rate": 25 })).toEqual('Invalid Input')
  });

});
