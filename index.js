function produceDrivingRange() {

  return function(beginning_point, end_point) {
    if (beginning_point - end_point) > blockRange {
      return false;
    }
    else {
      return true;
    }
  };
}

function produceTipCalculator() {

  return function(bill_amount) {
    return (bill_amount) * percentage;
  };
}

// createDriver
