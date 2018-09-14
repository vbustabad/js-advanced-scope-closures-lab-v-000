function produceDrivingRange(blockRange) {
  return function(beginning_point, end_point) {
    let beginning_point = parseInt(beginning_point).slice(0, -2);
    let end_point = parseInt(end_point).slice(0, -2);
    
    if ((beginning_point - end_point) > blockRange) {
      return false;
    }
    else {
      return true;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(bill_amount) {
    return (bill_amount * percentage);
  };
}

// createDriver
