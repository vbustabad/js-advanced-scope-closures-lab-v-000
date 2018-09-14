function produceDrivingRange(blockRange) {
  return function(beginning_point, end_point) {

    let start = parseInt(beginning_point).slice(0, -2);
    let finish = parseInt(end_point).slice(0, -2);
    
    if ((start - finish) > blockRange) {
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
  let driverId = 0;

  return Driver {
      constructor(name) {
        this.name = name;
        this.id = ++driverId;
      }
  };
}
