it('should calculate the monthly rate correctly', function() {
  const loan1 = {
    amount: 15000,
    years: 10,
    rate: 6
  };
  expect(calcMonthlyPayment(loan1)).toEqual('166.53');
  const loan2 = {
    amount: 12500,
    years: 6,
    rate: 5.59
  };
  expect(calcMonthlyPayment(loan2)).toEqual('204.75');
});

it("should return a result with 2 decimal places", function() {
  const loan1 = {
    amount: 13000,
    years: 7,
    rate: 5.14
  };
  expect(calcMonthlyPayment(loan1)).toEqual('184.60');
  const loan2 = {
    amount: 13000,
    years: 7,
    rate: 5.14
  };
  expect(calcMonthlyPayment(loan2)).toEqual('184.60');
});

it("should handle very high interest rates", function() {
  const loan1 = {
    amount: 10000,
    years: 20,
    rate: 99
  };
  expect(calcMonthlyPayment(loan1)).toEqual('825.00');
  const loan2 = {
    amount: 1000,
    years: 20,
    rate: 99
  };
  expect(calcMonthlyPayment(loan2)).toEqual('82.50');
});
