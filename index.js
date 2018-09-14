function produceDrivingRange(blockRange) {
  let beginning_point = parseInt(beginning_point).slice(0, -2);
  let end_point = parseInt(end_point).slice(0, -2);

  return function(beginning_point, end_point) {
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

function createDriver() {
  return Driver {
      constructor(name) {
        this.name = name;
        this.id = ++driverId;
      }
  };
}
