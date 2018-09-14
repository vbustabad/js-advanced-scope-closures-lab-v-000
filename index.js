function produceDrivingRange() {

  return function(blockRange) {
    return (blockRange[1] - blockRange[0]);
  };
}

function produceTipCalculator() {
  let tenPercentTip = produceTipCalculator(.10)

  return function(percentage) {
    return tenPercentTip(bill_amount) * percentage;
  };
}

// createDriver
