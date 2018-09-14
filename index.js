// function produceDrivingRange() {
//   return function(blockRange) {
//     return marketMultiplier * manufacturePrice;
//   };
// }

function produceTipCalculator() {
  let tenPercentTip = produceTipCalculator(.10)
  
  return function(percentage) {
    return tenPercentTip(bill_amount) * percentage;
  };
}

// createDriver
